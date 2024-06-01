import React from 'react';

const ClockIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.9}>
        <path strokeDasharray={60} strokeDashoffset={60} strokeOpacity={0.3} d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="3.9s" values="60;0"></animate>
        </path>
        <path strokeDasharray={15} strokeDashoffset={15} d="M12 3C16.9706 3 21 7.02944 21 12">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.9s" values="15;0"></animate>
          <animateTransform attributeName="transform" dur="4.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
        </path>
      </g>
    </svg>
  );
};

export default ClockIcon;
