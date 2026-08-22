import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  getSavedSongs,
  removeSavedSong,
  getMoodHistory,
  getPlaylists,
  createPlaylist,
  getUserSettings,
  updateUserSettings
} from '../lib/userData';

export default function MySpace() {
  const { user, profile, signOut } = useAuth();

  const [activeTab, setActiveTab] = useState('overview'); // overview | saved | moods | playlists | settings
  const [savedSongs, setSavedSongs] = useState([]);
  const [moodHistory, setMoodHistory] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [settings, setSettings] = useState({
    preferred_language: 'Hindi',
    favorite_genres: ['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'],
    theme_preference: 'dark'
  });

  const [loading, setLoading] = useState(true);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Load all user personal data
  useEffect(() => {
    async function loadData() {
      if (!user) return;
      setLoading(true);
      try {
        const [songs, moods, userPlaylists, userSettings] = await Promise.allSettled([
          getSavedSongs(),
          getMoodHistory(15),
          getPlaylists(),
          getUserSettings()
        ]);

        if (songs.status === 'fulfilled') setSavedSongs(songs.value);
        if (moods.status === 'fulfilled') setMoodHistory(moods.value);
        if (userPlaylists.status === 'fulfilled') setPlaylists(userPlaylists.value);
        if (userSettings.status === 'fulfilled' && userSettings.value) setSettings(userSettings.value);
      } catch (err) {
        console.error('[MySpace] Error loading user space:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [user]);

  const handleRemoveSong = async (trackId) => {
    try {
      await removeSavedSong(trackId);
      setSavedSongs(prev => prev.filter(s => s.track_id !== trackId));
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();
    if (!newPlaylistName.trim()) return;
    try {
      const created = await createPlaylist(newPlaylistName.trim());
      setPlaylists(prev => [created, ...prev]);
      setNewPlaylistName('');
      setShowCreateModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      await updateUserSettings(settings);
      setSettingsSaved(true);
      setTimeout(() => setSettingsSaved(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Beats Explorer';
  const email = user?.email || '';

  const getMoodEmoji = (mood) => {
    const m = (mood || '').toLowerCase();
    if (m.includes('happy') || m.includes('joy')) return '😄';
    if (m.includes('sad')) return '😢';
    if (m.includes('energetic') || m.includes('party')) return '⚡';
    if (m.includes('calm') || m.includes('chill')) return '🧘';
    if (m.includes('focus') || m.includes('study')) return '🎯';
    if (m.includes('romantic') || m.includes('love')) return '💖';
    return '✨';
  };

  return (
    <div style={styles.container}>
      {/* Top Header Card */}
      <div style={styles.heroCard}>
        <div style={styles.profileRow}>
          <div style={styles.avatar}>
            {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt={displayName} style={styles.avatarImg} />
            ) : (
              <span style={styles.avatarLetter}>{displayName.charAt(0).toUpperCase()}</span>
            )}
          </div>
          <div style={styles.profileInfo}>
            <div style={styles.greetingBadge}>MY SPACE</div>
            <h1 style={styles.heroTitle}>Welcome back, {displayName}</h1>
            <p style={styles.heroSub}>{email}</p>
          </div>
          <button style={styles.logoutBtn} onClick={() => signOut()}>
            Sign Out
          </button>
        </div>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{savedSongs.length}</span>
            <span style={styles.statLabel}>Saved Tracks</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{moodHistory.length}</span>
            <span style={styles.statLabel}>Mood Scans</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{playlists.length}</span>
            <span style={styles.statLabel}>Playlists</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.tabsRow}>
          <button
            style={activeTab === 'overview' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            style={activeTab === 'saved' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('saved')}
          >
            Saved Songs ({savedSongs.length})
          </button>
          <button
            style={activeTab === 'moods' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('moods')}
          >
            Mood Timeline ({moodHistory.length})
          </button>
          <button
            style={activeTab === 'playlists' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('playlists')}
          >
            Playlists ({playlists.length})
          </button>
          <button
            style={activeTab === 'settings' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('settings')}
          >
            Preferences
          </button>
        </div>
      </div>

      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={styles.spinner} />
          <p style={styles.loadingText}>Syncing your personal music cloud...</p>
        </div>
      ) : (
        <div style={styles.contentArea}>
          {/* SECTION 1: RECENTLY SAVED SONGS */}
          {(activeTab === 'overview' || activeTab === 'saved') && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>❤️ Recently Saved Songs</h2>
                {savedSongs.length > 0 && (
                  <span style={styles.badge}>{savedSongs.length} Tracks</span>
                )}
              </div>

              {savedSongs.length === 0 ? (
                <div style={styles.emptyCard}>
                  <div style={styles.emptyIcon}>🎵</div>
                  <h3 style={styles.emptyTitle}>No songs saved yet</h3>
                  <p style={styles.emptyText}>Tap the heart icon on any track while streaming to save it to your personal space.</p>
                </div>
              ) : (
                <div style={styles.trackList}>
                  {savedSongs.slice(0, activeTab === 'overview' ? 6 : 50).map((song) => (
                    <div key={song.id || song.track_id} style={styles.trackItem}>
                      <img
                        src={song.image_url || 'icon.png'}
                        alt={song.track_name}
                        style={styles.trackArt}
                        onError={(e) => { e.target.src = 'icon.png'; }}
                      />
                      <div style={styles.trackDetails}>
                        <div style={styles.trackName}>{song.track_name}</div>
                        <div style={styles.trackArtist}>{song.artist}</div>
                      </div>
                      {song.mood_tag && (
                        <span style={styles.moodTag}>{song.mood_tag}</span>
                      )}
                      <button
                        style={styles.deleteBtn}
                        onClick={() => handleRemoveSong(song.track_id)}
                        title="Remove from saved"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 2: MOOD TIMELINE */}
          {(activeTab === 'overview' || activeTab === 'moods') && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>🎭 Your Mood Timeline</h2>
                {moodHistory.length > 0 && (
                  <span style={styles.badge}>{moodHistory.length} Scans</span>
                )}
              </div>

              {moodHistory.length === 0 ? (
                <div style={styles.emptyCard}>
                  <div style={styles.emptyIcon}>📷</div>
                  <h3 style={styles.emptyTitle}>No mood history recorded yet</h3>
                  <p style={styles.emptyText}>Take a face scan on the home screen to log your first mood and unlock tailored soundscapes.</p>
                </div>
              ) : (
                <div style={styles.timelineList}>
                  {moodHistory.slice(0, activeTab === 'overview' ? 5 : 30).map((entry) => (
                    <div key={entry.id} style={styles.timelineItem}>
                      <div style={styles.moodEmoji}>{getMoodEmoji(entry.detected_mood)}</div>
                      <div style={styles.timelineInfo}>
                        <div style={styles.timelineMood}>{entry.detected_mood}</div>
                        <div style={styles.timelineMeta}>
                          {new Date(entry.created_at).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })} • {entry.source === 'face_scan' ? 'AI Camera Scan' : 'Manual Select'}
                        </div>
                      </div>
                      <div style={styles.confidenceBadge}>
                        {Math.round(entry.confidence || 85)}% Match
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 3: USER PLAYLISTS */}
          {(activeTab === 'overview' || activeTab === 'playlists') && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>📂 Your Custom Playlists</h2>
                <button
                  style={styles.actionBtn}
                  onClick={() => setShowCreateModal(true)}
                >
                  + New Playlist
                </button>
              </div>

              {playlists.length === 0 ? (
                <div style={styles.emptyCard}>
                  <div style={styles.emptyIcon}>💿</div>
                  <h3 style={styles.emptyTitle}>No custom playlists yet</h3>
                  <p style={styles.emptyText}>Create custom collections for work, gym, relaxation, and late-night vibes.</p>
                  <button
                    style={styles.actionBtnPrimary}
                    onClick={() => setShowCreateModal(true)}
                  >
                    Create Your First Playlist
                  </button>
                </div>
              ) : (
                <div style={styles.playlistGrid}>
                  {playlists.map((pl) => (
                    <div key={pl.id} style={styles.playlistCard}>
                      <div style={styles.playlistCover}>
                        <span style={{ fontSize: '32px' }}>🎵</span>
                      </div>
                      <div style={styles.playlistTitle}>{pl.playlist_name}</div>
                      <div style={styles.playlistMeta}>
                        Created {new Date(pl.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION 4: PREFERENCES & SETTINGS */}
          {activeTab === 'settings' && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>⚙️ Personal Preferences</h2>
              </div>

              <form onSubmit={handleSaveSettings} style={styles.settingsForm}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Preferred Language</label>
                  <select
                    style={styles.select}
                    value={settings.preferred_language}
                    onChange={(e) => setSettings({ ...settings, preferred_language: e.target.value })}
                  >
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Marathi">Marathi</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Theme Preference</label>
                  <select
                    style={styles.select}
                    value={settings.theme_preference}
                    onChange={(e) => setSettings({ ...settings, theme_preference: e.target.value })}
                  >
                    <option value="dark">Dark Aura (Default)</option>
                    <option value="oled">Pure Black (OLED)</option>
                    <option value="neon">Neon Cyberpunk</option>
                  </select>
                </div>

                <button type="submit" style={styles.actionBtnPrimary}>
                  Save Preferences
                </button>

                {settingsSaved && (
                  <div style={styles.successNotice}>
                    ✓ Preferences updated successfully!
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      )}

      {/* CREATE PLAYLIST MODAL */}
      {showCreateModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>Create New Playlist</h3>
            <form onSubmit={handleCreatePlaylist}>
              <input
                type="text"
                placeholder="Playlist name (e.g. Chill Lo-Fi Nights)"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                style={styles.input}
                autoFocus
              />
              <div style={styles.modalActions}>
                <button
                  type="button"
                  style={styles.modalCancel}
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" style={styles.actionBtnPrimary}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0c0f17',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    paddingBottom: '120px',
  },
  heroCard: {
    background: 'linear-gradient(180deg, rgba(30, 27, 75, 0.7) 0%, rgba(12, 15, 23, 0.95) 100%)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '32px 24px 16px',
  },
  profileRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  avatar: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
    flexShrink: 0,
  },
  avatarLetter: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  profileInfo: {
    flex: 1,
  },
  greetingBadge: {
    fontSize: '11px',
    letterSpacing: '1.5px',
    fontWeight: '700',
    color: '#818cf8',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  heroTitle: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 4px',
    color: '#ffffff',
  },
  heroSub: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.6)',
    margin: 0,
  },
  logoutBtn: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  statsRow: {
    display: 'flex',
    gap: '16px',
    maxWidth: '900px',
    margin: '24px auto 16px',
  },
  statBox: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNum: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: '2px',
  },
  tabsRow: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    maxWidth: '900px',
    margin: '20px auto 0',
    paddingBottom: '8px',
  },
  tab: {
    background: 'transparent',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '13px',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  tabActive: {
    background: '#6366f1',
    border: 'none',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
  },
  contentArea: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '24px 20px',
  },
  section: {
    marginBottom: '36px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: 0,
  },
  badge: {
    background: 'rgba(99, 102, 241, 0.2)',
    color: '#a5b4fc',
    fontSize: '12px',
    padding: '4px 10px',
    borderRadius: '12px',
    fontWeight: '600',
  },
  emptyCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px dashed rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    padding: '36px 20px',
    textAlign: 'center',
  },
  emptyIcon: {
    fontSize: '36px',
    marginBottom: '12px',
  },
  emptyTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 6px',
    color: '#ffffff',
  },
  emptyText: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.5)',
    maxWidth: '400px',
    margin: '0 auto 16px',
    lineHeight: '1.5',
  },
  actionBtn: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '600',
    padding: '6px 14px',
    borderRadius: '16px',
    cursor: 'pointer',
  },
  actionBtnPrimary: {
    background: '#6366f1',
    border: 'none',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: '600',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  trackList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  trackItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '10px 14px',
  },
  trackArt: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  trackDetails: {
    flex: 1,
    minWidth: 0,
  },
  trackName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  trackArtist: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: '2px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  moodTag: {
    background: 'rgba(168, 85, 247, 0.15)',
    color: '#c084fc',
    fontSize: '11px',
    padding: '4px 8px',
    borderRadius: '8px',
  },
  deleteBtn: {
    background: 'transparent',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '4px 8px',
  },
  timelineList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '12px 16px',
  },
  moodEmoji: {
    fontSize: '28px',
  },
  timelineInfo: {
    flex: 1,
  },
  timelineMood: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
  },
  timelineMeta: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: '2px',
  },
  confidenceBadge: {
    background: 'rgba(34, 197, 94, 0.15)',
    color: '#4ade80',
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '8px',
  },
  playlistGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '16px',
  },
  playlistCard: {
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '14px',
    padding: '16px',
    textAlign: 'center',
  },
  playlistCover: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  playlistTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '4px',
  },
  playlistMeta: {
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  settingsForm: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '24px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '8px',
  },
  select: {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',
    padding: '10px 14px',
    color: '#ffffff',
    fontSize: '14px',
  },
  successNotice: {
    marginTop: '14px',
    fontSize: '13px',
    color: '#4ade80',
    fontWeight: '600',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modalContent: {
    background: '#161922',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '18px',
    padding: '24px',
    width: '100%',
    maxWidth: '400px',
  },
  modalTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 16px',
    color: '#ffffff',
  },
  input: {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: '#ffffff',
    fontSize: '14px',
    marginBottom: '20px',
    outline: 'none',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
  },
  modalCancel: {
    background: 'transparent',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '10px 16px',
  },
  loadingContainer: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  spinner: {
    width: '36px',
    height: '36px',
    border: '3px solid rgba(99, 102, 241, 0.2)',
    borderTopColor: '#6366f1',
    borderRadius: '50%',
    margin: '0 auto 16px',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.6)',
  },
};
