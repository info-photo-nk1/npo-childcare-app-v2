import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  color,
}) => (
  <Link
    to={link}
    className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <div className="p-6">
      <div className={`${color} inline-block p-3 rounded-lg mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

export default FeatureCard;