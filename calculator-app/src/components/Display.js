import React from 'react';

export default function Display({ expression = '', result = null }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        minHeight: 36,
        textAlign: 'right',
        fontSize: 20,
        color: '#333',
        padding: '6px 8px',
        wordBreak: 'break-all',
        background: '#f7f7f7',
        borderRadius: 6
      }}>
        {expression || '0'}
      </div>
      
    </div>
  );
}
