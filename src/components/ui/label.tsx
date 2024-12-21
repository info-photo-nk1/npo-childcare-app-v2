import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label {...props} className="block text-gray-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
};

export default Label;
