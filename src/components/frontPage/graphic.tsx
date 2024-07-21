import React from 'react';

const RightSideSVG: React.FC = () => {
  return (
    <svg
      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
    >
      {/* Candlestick Pattern */}
      <defs>
        <linearGradient id="bullishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4caf50" />
          <stop offset="100%" stopColor="#388e3c" />
        </linearGradient>
        <linearGradient id="bearishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f44336" />
          <stop offset="100%" stopColor="#c62828" />
        </linearGradient>
      </defs>

      <g strokeWidth="2">
        {/* Bullish Candlesticks */}
        <g>
          <rect x="10" y="35" width="6" height="25" fill="url(#bullishGradient)" stroke="#2e7d32" />
          <line x1="13" y1="10" x2="13" y2="60" stroke="#2e7d32" strokeWidth="2" />
          <circle cx="13" cy="10" r="1.5" fill="#2e7d32" />
        </g>
        
        <g>
          <rect x="20" y="30" width="6" height="30" fill="url(#bullishGradient)" stroke="#2e7d32" />
          <line x1="23" y1="0" x2="23" y2="60" stroke="#2e7d32" strokeWidth="2" />
          <circle cx="23" cy="0" r="1.5" fill="#2e7d32" />
        </g>
        
        <g>
          <rect x="30" y="45" width="6" height="20" fill="url(#bullishGradient)" stroke="#2e7d32" />
          <line x1="33" y1="20" x2="33" y2="65" stroke="#2e7d32" strokeWidth="2" />
          <circle cx="33" cy="20" r="1.5" fill="#2e7d32" />
        </g>
        
        {/* Bearish Candlesticks */}
        <g>
          <rect x="40" y="30" width="6" height="30" fill="url(#bearishGradient)" stroke="#b71c1c" />
          <line x1="43" y1="0" x2="43" y2="60" stroke="#b71c1c" strokeWidth="2" />
          <circle cx="43" cy="0" r="1.5" fill="#b71c1c" />
        </g>
        
        <g>
          <rect x="50" y="40" width="6" height="25" fill="url(#bearishGradient)" stroke="#b71c1c" />
          <line x1="53" y1="15" x2="53" y2="65" stroke="#b71c1c" strokeWidth="2" />
          <circle cx="53" cy="15" r="1.5" fill="#b71c1c" />
        </g>
        
        <g>
          <rect x="60" y="50" width="6" height="20" fill="url(#bearishGradient)" stroke="#b71c1c" />
          <line x1="63" y1="30" x2="63" y2="70" stroke="#b71c1c" strokeWidth="2" />
          <circle cx="63" cy="30" r="1.5" fill="#b71c1c" />
        </g>
      </g>
    </svg>
  );
};

export default RightSideSVG;
