import React from 'react';
import clsx from 'clsx';

const BASE = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const VARIANTS = {
  default: 'bg-primary text-white hover:bg-primary/90',
  ghost: 'bg-transparent hover:bg-secondary/6 text-primary border border-transparent',
  secondary: 'bg-secondary text-white hover:bg-secondary/90',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
};

const Button = React.forwardRef(({ children, variant = 'default', size = 'md', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(BASE, VARIANTS[variant], SIZES[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };