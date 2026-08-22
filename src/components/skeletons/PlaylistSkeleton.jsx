import React from 'react';
import SkeletonBox from './SkeletonBox';
import SkeletonCircle from './SkeletonCircle';
import SkeletonText from './SkeletonText';
import './Skeleton.css';

export default function PlaylistSkeleton({ count = 6 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      {Array.from({ length: count }).map((_, i) => (
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
            <SkeletonText width={i % 2 === 0 ? '55%' : '40%'} height="15px" style={{ marginBottom: '6px' }} />
            <SkeletonText width={i % 2 === 0 ? '35%' : '25%'} height="12px" />
          </div>
          <SkeletonText width="36px" height="12px" />
          <SkeletonCircle size="28px" />
        </div>
      ))}
    </div>
  );
}
