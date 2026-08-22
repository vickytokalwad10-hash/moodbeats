import React from 'react';
import './Skeleton.css';

export default function SkeletonCircle({
  size = '48px',
  style = {},
  className = ''
}) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        ...style
      }}
    />
  );
}
