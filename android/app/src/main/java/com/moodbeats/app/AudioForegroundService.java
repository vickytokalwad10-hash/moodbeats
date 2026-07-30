package com.moodbeats.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.os.Build;
import android.os.IBinder;
import android.support.v4.media.MediaMetadataCompat;
import android.support.v4.media.session.MediaSessionCompat;
import android.support.v4.media.session.PlaybackStateCompat;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;
import androidx.media.app.NotificationCompat.MediaStyle;

public class AudioForegroundService extends Service implements AudioManager.OnAudioFocusChangeListener {

    private static final String CHANNEL_ID = "moodbeats_playback_channel";
    private static final int NOTIFICATION_ID = 404;

    private MediaSessionCompat mediaSession;
    private AudioManager audioManager;
    private AudioFocusRequest audioFocusRequest;
    private boolean isPlaying = false;
    private String currentTitle = "MoodBeats";
    private String currentArtist = "Playing curations...";

    @Override
    public void onCreate() {
        super.onCreate();
        audioManager = (AudioManager) getSystemService(Context.AUDIO_SERVICE);

        // 1. Create Media Session
        mediaSession = new MediaSessionCompat(this, "MoodBeatsMediaSession");
        mediaSession.setFlags(MediaSessionCompat.FLAG_HANDLES_MEDIA_BUTTONS | MediaSessionCompat.FLAG_HANDLES_TRANSPORT_CONTROLS);
        mediaSession.setCallback(mediaSessionCallback);
        mediaSession.setActive(true);

        // 2. Create Notification Channel
        createNotificationChannel();

        // 3. Request Audio Focus
        requestAudioFocus();
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID,
                    "MoodBeats Playback Channel",
                    NotificationManager.IMPORTANCE_LOW
            );
            channel.setDescription("Shows media controller notification for MoodBeats");
            NotificationManager manager = getSystemService(NotificationManager.class);
            if (manager != null) {
                manager.createNotificationChannel(channel);
            }
        }
    }

    private void requestAudioFocus() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            AudioAttributes audioAttributes = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                    .build();
            audioFocusRequest = new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
                    .setAudioAttributes(audioAttributes)
                    .setAcceptsDelayedFocusGain(true)
                    .setOnAudioFocusChangeListener(this)
                    .build();
            audioManager.requestAudioFocus(audioFocusRequest);
        } else {
            audioManager.requestAudioFocus(this, AudioManager.STREAM_MUSIC, AudioManager.AUDIOFOCUS_GAIN);
        }
    }

    private void abandonAudioFocus() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            if (audioFocusRequest != null) {
                audioManager.abandonAudioFocusRequest(audioFocusRequest);
            }
        } else {
            audioManager.abandonAudioFocus(this);
        }
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null && intent.getAction() != null) {
            String action = intent.getAction();
            if (action.equals("ACTION_UPDATE_METADATA")) {
                currentTitle = intent.getStringExtra("title");
                currentArtist = intent.getStringExtra("artist");
                updateMediaSessionMetadata();
                updateNotification();
            } else if (action.equals("ACTION_UPDATE_PLAYBACK")) {
                isPlaying = intent.getBooleanExtra("isPlaying", false);
                float position = intent.getFloatExtra("position", 0);
                float duration = intent.getFloatExtra("duration", 0);
                updateMediaSessionPlaybackState(position);
                updateNotification();
            } else if (action.equals("ACTION_PLAY_PAUSE")) {
                if (MainActivity.instance != null) {
                    MainActivity.instance.triggerWebControl("toggle");
                }
            } else if (action.equals("ACTION_NEXT")) {
                if (MainActivity.instance != null) {
                    MainActivity.instance.triggerWebControl("next");
                }
            } else if (action.equals("ACTION_PREV")) {
                if (MainActivity.instance != null) {
                    MainActivity.instance.triggerWebControl("prev");
                }
            }
        }
        return START_NOT_STICKY;
    }

    private void updateMediaSessionMetadata() {
        Bitmap art = BitmapFactory.decodeResource(getResources(), R.mipmap.ic_launcher);
        mediaSession.setMetadata(new MediaMetadataCompat.Builder()
                .putString(MediaMetadataCompat.METADATA_KEY_TITLE, currentTitle)
                .putString(MediaMetadataCompat.METADATA_KEY_ARTIST, currentArtist)
                .putString(MediaMetadataCompat.METADATA_KEY_ALBUM, "MoodBeats")
                .putBitmap(MediaMetadataCompat.METADATA_KEY_ALBUM_ART, art)
                .build());
    }

    private void updateMediaSessionPlaybackState(float position) {
        int state = isPlaying ? PlaybackStateCompat.STATE_PLAYING : PlaybackStateCompat.STATE_PAUSED;
        mediaSession.setPlaybackState(new PlaybackStateCompat.Builder()
                .setState(state, (long)(position * 1000), 1.0f)
                .setActions(PlaybackStateCompat.ACTION_PLAY | PlaybackStateCompat.ACTION_PAUSE |
                        PlaybackStateCompat.ACTION_PLAY_PAUSE | PlaybackStateCompat.ACTION_SKIP_TO_NEXT |
                        PlaybackStateCompat.ACTION_SKIP_TO_PREVIOUS | PlaybackStateCompat.ACTION_SEEK_TO)
                .build());
    }

    private void updateNotification() {
        Intent notificationIntent = new Intent(this, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0, notificationIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0
        );

        // Control buttons intents
        Intent playPauseIntent = new Intent(this, AudioForegroundService.class).setAction("ACTION_PLAY_PAUSE");
        PendingIntent playPausePendingIntent = PendingIntent.getService(this, 1, playPauseIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0);

        Intent nextIntent = new Intent(this, AudioForegroundService.class).setAction("ACTION_NEXT");
        PendingIntent nextPendingIntent = PendingIntent.getService(this, 2, nextIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0);

        Intent prevIntent = new Intent(this, AudioForegroundService.class).setAction("ACTION_PREV");
        PendingIntent prevPendingIntent = PendingIntent.getService(this, 3, prevIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0);

        int playPauseIcon = isPlaying ? android.R.drawable.ic_media_pause : android.R.drawable.ic_media_play;

        Bitmap largeIcon = BitmapFactory.decodeResource(getResources(), R.mipmap.ic_launcher);

        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(android.R.drawable.ic_media_play)
                .setLargeIcon(largeIcon)
                .setContentTitle(currentTitle)
                .setContentText(currentArtist)
                .setContentIntent(pendingIntent)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setOngoing(isPlaying)
                .setStyle(new MediaStyle()
                        .setMediaSession(mediaSession.getSessionToken())
                        .setShowActionsInCompactView(0, 1, 2))
                .addAction(android.R.drawable.ic_media_previous, "Previous", prevPendingIntent)
                .addAction(playPauseIcon, isPlaying ? "Pause" : "Play", playPausePendingIntent)
                .addAction(android.R.drawable.ic_media_next, "Next", nextPendingIntent);

        Notification notification = builder.build();
        if (isPlaying) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                startForeground(NOTIFICATION_ID, notification, android.content.pm.ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK);
            } else {
                startForeground(NOTIFICATION_ID, notification);
            }
        } else {
            stopForeground(false);
            NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (manager != null) {
                manager.notify(NOTIFICATION_ID, notification);
            }
        }
    }

    private final MediaSessionCompat.Callback mediaSessionCallback = new MediaSessionCompat.Callback() {
        @Override
        public void onPlay() {
            if (MainActivity.instance != null) {
                MainActivity.instance.triggerWebControl("play");
            }
        }

        @Override
        public void onPause() {
            if (MainActivity.instance != null) {
                MainActivity.instance.triggerWebControl("pause");
            }
        }

        @Override
        public void onSkipToNext() {
            if (MainActivity.instance != null) {
                MainActivity.instance.triggerWebControl("next");
            }
        }

        @Override
        public void onSkipToPrevious() {
            if (MainActivity.instance != null) {
                MainActivity.instance.triggerWebControl("prev");
            }
        }

        @Override
        public void onSeekTo(long pos) {
            if (MainActivity.instance != null) {
                MainActivity.instance.triggerWebControl("seekTo:" + (pos / 1000));
            }
        }
    };

    @Override
    public void onAudioFocusChange(int focusChange) {
        switch (focusChange) {
            case AudioManager.AUDIOFOCUS_LOSS:
            case AudioManager.AUDIOFOCUS_LOSS_TRANSIENT:
                if (MainActivity.instance != null && isPlaying) {
                    MainActivity.instance.triggerWebControl("pause");
                }
                break;
            case AudioManager.AUDIOFOCUS_GAIN:
                if (MainActivity.instance != null && !isPlaying) {
                    MainActivity.instance.triggerWebControl("play");
                }
                break;
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mediaSession.release();
        abandonAudioFocus();
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
