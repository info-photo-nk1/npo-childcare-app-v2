import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`bg-white shadow-md rounded-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
