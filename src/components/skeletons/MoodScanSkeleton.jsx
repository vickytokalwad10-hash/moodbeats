import React from 'react';
import SkeletonBox from './SkeletonBox';
import SkeletonText from './SkeletonText';
import './Skeleton.css';

export default function MoodScanSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
      }}
    >
      {/* Viewfinder Frame with subtle pulse */}
      <div
        className="skeleton-pulse"
        style={{
          width: '100%',
          maxWidth: '320px',
          aspectRatio: '1',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))',
          border: '2px dashed rgba(99, 102, 241, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          marginBottom: '28px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{ fontSize: '48px', marginBottom: '12px', opacity: 0.8 }}>📷</span>
        <SkeletonText width="140px" height="14px" borderRadius="6px" style={{ marginBottom: '6px' }} />
        <SkeletonText width="100px" height="11px" borderRadius="4px" />

        {/* Scan line beam */}
        <div
          className="skeleton-shimmer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #818cf8, transparent)',
          }}
        />
      </div>

      <SkeletonText width="200px" height="18px" borderRadius="8px" style={{ marginBottom: '8px' }} />
      <SkeletonText width="260px" height="13px" borderRadius="4px" style={{ marginBottom: '24px' }} />

      <div style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '320px' }}>
        <SkeletonBox width="50%" height="42px" borderRadius="20px" />
        <SkeletonBox width="50%" height="42px" borderRadius="20px" />
      </div>
    </div>
  );
}
