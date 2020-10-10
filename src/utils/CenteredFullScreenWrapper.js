import React from 'react';

const CenteredFullScreenWrapper = ({ style, children, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(35, 35, 56)',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default CenteredFullScreenWrapper;
