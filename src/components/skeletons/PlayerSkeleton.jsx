import React from 'react';
import SkeletonBox from './SkeletonBox';
import SkeletonCircle from './SkeletonCircle';
import SkeletonText from './SkeletonText';
import './Skeleton.css';

export default function PlayerSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px',
        maxWidth: '480px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Album Art Square Placeholder */}
      <SkeletonBox
        width="100%"
        height="280px"
        borderRadius="20px"
        style={{
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          marginBottom: '28px',
        }}
      />

      {/* Title & Artist Lines */}
      <div style={{ width: '100%', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <SkeletonText width="65%" height="20px" borderRadius="6px" style={{ marginBottom: '8px' }} />
          <SkeletonText width="40%" height="14px" borderRadius="4px" />
        </div>
        <SkeletonCircle size="36px" />
      </div>

      {/* Progress Bar Shimmer */}
      <div style={{ width: '100%', marginBottom: '28px' }}>
        <SkeletonBox width="100%" height="6px" borderRadius="3px" style={{ marginBottom: '8px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SkeletonText width="32px" height="11px" />
          <SkeletonText width="32px" height="11px" />
        </div>
      </div>

      {/* Playback Control Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', width: '100%' }}>
        <SkeletonCircle size="36px" />
        <SkeletonCircle size="44px" />
        <SkeletonCircle size="64px" />
        <SkeletonCircle size="44px" />
        <SkeletonCircle size="36px" />
      </div>
    </div>
  );
}
