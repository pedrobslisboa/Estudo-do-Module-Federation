import React from 'react';

export default function Button(props) {
  const { children, ...rest } = props;

  return (
    <button
      style={{
        border: '1px solid red',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
