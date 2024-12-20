import React from 'react';
import { Bell } from 'lucide-react';

const ContactHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">連絡帳</h1>
        <p className="text-gray-600">お子様の日々の様子を共有・記録します</p>
      </div>
      <button className="relative p-2 text-gray-500 hover:text-gray-700">
        <Bell className="h-6 w-6" />
        <span className="absolute top-0 right-0 h-4 w-4 bg-rose-500 rounded-full text-white text-xs flex items-center justify-center">
          3
        </span>
      </button>
    </div>
  );
};

export default ContactHeader;