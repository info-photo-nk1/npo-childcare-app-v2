import React from 'react';
import { Camera, Tag } from 'lucide-react';
import type { Photo } from '../../types/contact';

interface PhotoGalleryProps {
  photos: Photo[];
  onPhotoSelect: (photo: Photo) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onPhotoSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <button
          key={photo.id}
          onClick={() => onPhotoSelect(photo)}
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <img
            src={photo.url}
            alt={photo.caption}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <p className="text-sm font-medium truncate">{photo.caption}</p>
              <div className="flex items-center gap-2 mt-1">
                <Camera className="h-4 w-4" />
                <span className="text-xs">{photo.date}</span>
              </div>
              {photo.tags.length > 0 && (
                <div className="flex items-center gap-1 mt-1">
                  <Tag className="h-3 w-3" />
                  <div className="flex gap-1">
                    {photo.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/20 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default PhotoGallery;