import cn from '@/utils/cn';
import React, { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}


const Button = ({ className = '', children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] rounded-xl bg-gradient-to-t from-blue-900 to-blue-300 active:scale-95 w-fit",
        className
      )}
    >
      <span className="w-full h-full px-3 py-2 flex items-center gap-2 text-white rounded-lg bg-gradient-to-t from-primary to-blue-500">
        {children}
      </span>
    </button>
  );
};


export default Button;