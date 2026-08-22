import React, { useState, useEffect } from 'react';
import SkeletonBox from './SkeletonBox';
import SkeletonCircle from './SkeletonCircle';
import SkeletonText from './SkeletonText';
import './Skeleton.css';

export default function AppSkeleton({ onRetry }) {
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeoutWarning(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0c0f17',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Brand Icon / Logo Placeholder with subtle pulse */}
      <div className="skeleton-pulse" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(168, 85, 247, 0.25))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            margin: '0 auto 16px',
            boxShadow: '0 12px 32px rgba(99, 102, 241, 0.2)',
          }}
        >
          🎵
        </div>
      </div>

      {/* Brand Title & Tagline Shimmer */}
      <SkeletonText width="160px" height="24px" borderRadius="8px" style={{ marginBottom: '10px' }} />
      <SkeletonText width="220px" height="14px" borderRadius="6px" style={{ marginBottom: '32px' }} />

      {/* Mini Skeleton Card matching App Aesthetic */}
      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <SkeletonCircle size="40px" />
          <div style={{ flex: 1 }}>
            <SkeletonText width="60%" height="14px" style={{ marginBottom: '6px' }} />
            <SkeletonText width="40%" height="11px" />
          </div>
        </div>
        <SkeletonBox height="8px" borderRadius="4px" style={{ marginTop: '8px' }} />
      </div>

      {/* Timeout / Slow Connection Graceful Notice */}
      {showTimeoutWarning && (
        <div
          style={{
            marginTop: '28px',
            textAlign: 'center',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: '12px',
            padding: '12px 20px',
            maxWidth: '320px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#fca5a5', margin: '0 0 10px' }}>
            Taking longer than usual to connect...
          </p>
          <button
            onClick={() => (onRetry ? onRetry() : window.location.reload())}
            style={{
              background: '#6366f1',
              color: '#ffffff',
              border: 'none',
              borderRadius: '16px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Retry Connection
          </button>
        </div>
      )}
    </div>
  );
}
