import React from 'react';
import './Skeleton.css';

export default function SkeletonBox({
  width = '100%',
  height = '100px',
  borderRadius = '12px',
  style = {},
  className = ''
}) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width,
        height,
        borderRadius,
        flexShrink: 0,
        ...style
      }}
    />
  );
}
