import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  className = '',
  filled = false,
  size,
}) => {
  return (
    <span
      className={`material-symbols-rounded ${filled ? 'icon-filled' : ''} ${className}`}
      style={size ? { fontSize: `${size}px` } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
