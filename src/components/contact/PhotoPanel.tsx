import React, { useState, useMemo } from 'react';
import { Calendar, Tag } from 'lucide-react';
import PhotoGallery from './PhotoGallery';
import { photos as photoData } from '../../data/photos';
import type { Photo } from '../../types/contact';

const PhotoPanel = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    return Array.from(new Set(photoData.flatMap(photo => photo.tags)));
  }, [photoData]);

  const filteredPhotos = useMemo(() => {
    return photoData.filter(photo => {
      if (selectedDate && photo.date !== selectedDate) return false;
      if (selectedTags.length > 0) {
        return selectedTags.every(tag => photo.tags.includes(tag));
      }
      return true;
    });
  }, [selectedDate, selectedTags, photoData]);

  const groupedPhotos = useMemo(() => {
    return filteredPhotos.reduce((acc: { [key: string]: Photo[] }, photo) => {
      const date = photo.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(photo);
      return acc;
    }, {});
  }, [filteredPhotos]);

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

      {Object.entries(groupedPhotos).sort((a, b) => b[0].localeCompare(a[0])).map(([date, photos]) => (
        <div key={date} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{date}</h2>
          <PhotoGallery
            photos={photos}
            onPhotoSelect={(photo) => console.log('Selected photo:', photo)}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoPanel;
