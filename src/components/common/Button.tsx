import React from 'react';

import type { ButtonProps } from '@/types/Button';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
     className={`${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;