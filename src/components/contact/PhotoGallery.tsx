import React from 'react';
import { Camera, Tag } from 'lucide-react';
import type { Photo } from '../../types/contact';

interface PhotoGalleryProps {
  photos: Photo[];
  onPhotoSelect: (photo: Photo) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onPhotoSelect }) => {
  return (
    <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-none w-[280px]"
          style={{
            backgroundImage: "url('/paper-texture.png')",
            padding: "8px",
          }}
        >
          <button
            onClick={() => onPhotoSelect(photo)}
            className="w-full h-full"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              style={{ border: "4px solid white" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm font-medium truncate">{photo.caption}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Camera className="h-4 w-4" />
                  <span className="text-xs">{photo.date}</span>
                </div>
                {photo.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1 mt-2">
                    <Tag className="h-3 w-3" />
                    <div className="flex flex-wrap gap-1">
                      {photo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
