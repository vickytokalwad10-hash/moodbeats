import React from 'react';
import './Skeleton.css';

export default function SkeletonText({
  width = '100%',
  height = '14px',
  lines = 1,
  borderRadius = '6px',
  gap = '8px',
  style = {},
  className = ''
}) {
  if (lines > 1) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap, width: '100%', ...style }}>
        {Array.from({ length: lines }).map((_, i) => {
          const lineWidth = i === lines - 1 && width === '100%' ? '65%' : (Array.isArray(width) ? width[i] || '100%' : width);
          return (
            <div
              key={i}
              className={`skeleton-shimmer ${className}`}
              style={{
                width: lineWidth,
                height,
                borderRadius,
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style
      }}
    />
  );
}
