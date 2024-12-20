import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import PhotoGallery from './PhotoGallery';
import { photos } from '../../data/photos';

const PhotoPanel = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(photos.flatMap(photo => photo.tags))
  );

  const filteredPhotos = photos.filter(photo => {
    if (selectedDate && photo.date !== selectedDate) return false;
    if (selectedTags.length > 0) {
      return selectedTags.every(tag => photo.tags.includes(tag));
    }
    return true;
  });

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="inline-block h-4 w-4 mr-1" />
            日付で絞り込み
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Tag className="inline-block h-4 w-4 mr-1" />
            タグで絞り込み
          </label>
          <select
            multiple
            value={selectedTags}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              setSelectedTags(values);
            }}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          >
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <PhotoGallery
        photos={filteredPhotos}
        onPhotoSelect={(photo) => console.log('Selected photo:', photo)}
      />
    </div>
  );
};

export default PhotoPanel;