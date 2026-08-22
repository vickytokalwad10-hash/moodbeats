import React from 'react';
import SkeletonBox from './SkeletonBox';
import SkeletonCircle from './SkeletonCircle';
import SkeletonText from './SkeletonText';
import './Skeleton.css';

export default function MySpaceSkeleton() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0c0f17',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        paddingBottom: '120px',
      }}
    >
      {/* Top Hero Skeleton Header */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(30, 27, 75, 0.7) 0%, rgba(12, 15, 23, 0.95) 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '32px 24px 16px',
        }}
      >
        {/* Profile Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <SkeletonCircle size="72px" />
          <div style={{ flex: 1 }}>
            <SkeletonText width="80px" height="11px" borderRadius="4px" style={{ marginBottom: '8px' }} />
            <SkeletonText width="240px" height="24px" borderRadius="6px" style={{ marginBottom: '6px' }} />
            <SkeletonText width="180px" height="13px" borderRadius="4px" />
          </div>
          <SkeletonBox width="80px" height="32px" borderRadius="20px" />
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            maxWidth: '900px',
            margin: '24px auto 16px',
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <SkeletonText width="32px" height="22px" borderRadius="4px" />
              <SkeletonText width="60px" height="12px" borderRadius="4px" />
            </div>
          ))}
        </div>

        {/* Tabs Row */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '900px',
            margin: '20px auto 0',
            paddingBottom: '8px',
          }}
        >
          {[80, 120, 140, 100, 90].map((w, i) => (
            <SkeletonBox key={i} width={`${w}px`} height="32px" borderRadius="20px" />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 20px' }}>
        {/* Section 1: Saved Songs Skeletons */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <SkeletonText width="180px" height="20px" borderRadius="6px" />
            <SkeletonBox width="70px" height="24px" borderRadius="12px" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                }}
              >
                <SkeletonBox width="48px" height="48px" borderRadius="8px" />
                <div style={{ flex: 1 }}>
                  <SkeletonText width="45%" height="15px" style={{ marginBottom: '6px' }} />
                  <SkeletonText width="30%" height="12px" />
                </div>
                <SkeletonBox width="54px" height="22px" borderRadius="8px" />
                <SkeletonCircle size="24px" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Mood Timeline Skeletons */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <SkeletonText width="160px" height="20px" borderRadius="6px" />
            <SkeletonBox width="60px" height="24px" borderRadius="12px" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                }}
              >
                <SkeletonCircle size="36px" />
                <div style={{ flex: 1 }}>
                  <SkeletonText width="35%" height="15px" style={{ marginBottom: '6px' }} />
                  <SkeletonText width="50%" height="12px" />
                </div>
                <SkeletonBox width="64px" height="22px" borderRadius="8px" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Playlists Skeletons */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <SkeletonText width="170px" height="20px" borderRadius="6px" />
            <SkeletonBox width="90px" height="28px" borderRadius="16px" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '16px',
                }}
              >
                <SkeletonBox width="100%" height="140px" borderRadius="10px" style={{ marginBottom: '12px' }} />
                <SkeletonText width="70%" height="15px" style={{ marginBottom: '6px' }} />
                <SkeletonText width="40%" height="11px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
