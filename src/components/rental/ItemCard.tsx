import React from 'react';
import { MapPin, Tag, Clock } from 'lucide-react';
import type { RentalItem } from '../../types/rental';

interface ItemCardProps {
  item: RentalItem;
  onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
  const listingTypeColors = {
    rent: 'bg-blue-100 text-blue-800',
    sell: 'bg-green-100 text-green-800',
    give: 'bg-purple-100 text-purple-800',
  };

  const listingTypeLabels = {
    rent: 'レンタル',
    sell: '売ります',
    give: '譲ります',
  };

  return (
    <button
      onClick={onClick}
      className="block w-full text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative aspect-square">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${listingTypeColors[item.listingType]}`}>
          {listingTypeLabels[item.listingType]}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4" />
          {item.location}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="text-lg font-bold text-gray-900">
            {item.listingType === 'give' ? '無料' : 
              item.listingType === 'rent' ? `¥${item.price}/日` :
              `¥${item.price}`
            }
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {new Date(item.createdAt).toLocaleDateString()}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default ItemCard;