package com.moodbeats.app;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.ConsoleMessage;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    public static MainActivity instance;
    private static final int CAMERA_PERM_REQ = 1001;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        instance = this;

        // ── Step 1: Request Android runtime CAMERA permission immediately ──
        // This shows the system dialog so the user grants it BEFORE trying to scan.
        requestCameraPermissionIfNeeded();

        // ── Step 2: Wrap (not replace) Capacitor's WebChromeClient ──
        // We need to keep Capacitor's client for its own internal handling,
        // but we MUST intercept onPermissionRequest to grant camera access
        // to the WebView's getUserMedia call.
        setupWebViewCameraPermissions();

        // ── Step 3: JavaScript ↔ Android audio bridge ──
        getBridge().getWebView().addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void updateMetadata(String title, String artist) {
                Intent serviceIntent = new Intent(MainActivity.this, AudioForegroundService.class);
                serviceIntent.setAction("ACTION_UPDATE_METADATA");
                serviceIntent.putExtra("title", title);
                serviceIntent.putExtra("artist", artist);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    startForegroundService(serviceIntent);
                } else {
                    startService(serviceIntent);
                }
            }

            @JavascriptInterface
            public void updatePlaybackState(boolean isPlaying, float position, float duration) {
                Intent serviceIntent = new Intent(MainActivity.this, AudioForegroundService.class);
                serviceIntent.setAction("ACTION_UPDATE_PLAYBACK");
                serviceIntent.putExtra("isPlaying", isPlaying);
                serviceIntent.putExtra("position", position);
                serviceIntent.putExtra("duration", duration);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    startForegroundService(serviceIntent);
                } else {
                    startService(serviceIntent);
                }
            }
        }, "AndroidAudioBridge");
    }

    /**
     * Request camera + microphone permissions from the OS.
     * On Android 6+, this shows the system permission dialog.
     * Without this the WebView's getUserMedia ALWAYS fails on Android.
     */
    private void requestCameraPermissionIfNeeded() {
        boolean cameraGranted = ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED;
        boolean audioGranted  = ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO)
                == PackageManager.PERMISSION_GRANTED;

        if (!cameraGranted || !audioGranted) {
            ActivityCompat.requestPermissions(this,
                new String[]{Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO},
                CAMERA_PERM_REQ);
        }
    }

    /**
     * Replace WebChromeClient while preserving Capacitor functionality.
     * The key override is onPermissionRequest — this is what allows the
     * WebView's navigator.getUserMedia to actually access the camera.
     * Without this, getUserMedia silently hangs forever on Android WebView.
     */
    private void setupWebViewCameraPermissions() {
        final WebView webView = getBridge().getWebView();
        // Capture Capacitor's existing client so we can delegate non-camera calls
        final WebChromeClient capacitorClient = webView.getWebChromeClient();

        webView.setWebChromeClient(new WebChromeClient() {

            // THE critical override — grants camera/mic to the web page
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        request.grant(request.getResources());
                    }
                });
            }

            // Delegate console.log output to Capacitor's handler
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                if (capacitorClient != null) {
                    return capacitorClient.onConsoleMessage(consoleMessage);
                }
                return super.onConsoleMessage(consoleMessage);
            }

            // Delegate progress updates
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (capacitorClient != null) {
                    capacitorClient.onProgressChanged(view, newProgress);
                } else {
                    super.onProgressChanged(view, newProgress);
                }
            }

            // Delegate page title updates
            @Override
            public void onReceivedTitle(WebView view, String title) {
                if (capacitorClient != null) {
                    capacitorClient.onReceivedTitle(view, title);
                } else {
                    super.onReceivedTitle(view, title);
                }
            }

            // Delegate icon updates
            @Override
            public void onReceivedIcon(WebView view, android.graphics.Bitmap icon) {
                if (capacitorClient != null) {
                    capacitorClient.onReceivedIcon(view, icon);
                } else {
                    super.onReceivedIcon(view, icon);
                }
            }

            // Delegate JS alert dialogs
            @Override
            public boolean onJsAlert(WebView view, String url, String message, android.webkit.JsResult result) {
                if (capacitorClient != null) {
                    return capacitorClient.onJsAlert(view, url, message, result);
                }
                return super.onJsAlert(view, url, message, result);
            }

            // Delegate JS confirm dialogs
            @Override
            public boolean onJsConfirm(WebView view, String url, String message, android.webkit.JsResult result) {
                if (capacitorClient != null) {
                    return capacitorClient.onJsConfirm(view, url, message, result);
                }
                return super.onJsConfirm(view, url, message, result);
            }

            // Delegate JS prompt dialogs
            @Override
            public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, android.webkit.JsPromptResult result) {
                if (capacitorClient != null) {
                    return capacitorClient.onJsPrompt(view, url, message, defaultValue, result);
                }
                return super.onJsPrompt(view, url, message, defaultValue, result);
            }

            // Delegate window creation
            @Override
            public boolean onCreateWindow(WebView view, boolean dialog, boolean userGesture, android.os.Message resultMsg) {
                if (capacitorClient != null) {
                    return capacitorClient.onCreateWindow(view, dialog, userGesture, resultMsg);
                }
                return super.onCreateWindow(view, dialog, userGesture, resultMsg);
            }

            // Delegate file chooser for file inputs
            @Override
            public boolean onShowFileChooser(WebView webView, android.webkit.ValueCallback<android.net.Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
                if (capacitorClient != null) {
                    return capacitorClient.onShowFileChooser(webView, filePathCallback, fileChooserParams);
                }
                return super.onShowFileChooser(webView, filePathCallback, fileChooserParams);
            }

            // Geolocation permission
            @Override
            public void onGeolocationPermissionsShowPrompt(String origin, android.webkit.GeolocationPermissions.Callback callback) {
                if (capacitorClient != null) {
                    capacitorClient.onGeolocationPermissionsShowPrompt(origin, callback);
                } else {
                    callback.invoke(origin, true, false);
                }
            }
        });
    }

    public void triggerWebControl(final String command) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (command.equals("toggle")) {
                    getBridge().getWebView().evaluateJavascript("window.MoodBeats.play()", null);
                } else if (command.equals("play")) {
                    getBridge().getWebView().evaluateJavascript("window.MoodBeats.play()", null);
                } else if (command.equals("pause")) {
                    getBridge().getWebView().evaluateJavascript("window.MoodBeats.pause()", null);
                } else if (command.equals("next")) {
                    getBridge().getWebView().evaluateJavascript("window.MoodBeats.next()", null);
                } else if (command.equals("prev")) {
                    getBridge().getWebView().evaluateJavascript("window.MoodBeats.prev()", null);
                } else if (command.startsWith("seekTo:")) {
                    String timeStr = command.substring(7);
                    getBridge().getWebView().evaluateJavascript("window.MoodBeats.seekTo(" + timeStr + ")", null);
                }
            }
        });
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Intent serviceIntent = new Intent(this, AudioForegroundService.class);
        stopService(serviceIntent);
    }
}
