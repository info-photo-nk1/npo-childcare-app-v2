import React, { useState, useMemo, useCallback } from 'react';
import { Calendar, Tag, X, Upload, Camera } from 'lucide-react';
import PhotoGallery from './PhotoGallery';
import { photos as photoData } from '../../data/photos';
import type { Photo } from '../../types/contact';

const PhotoPanel = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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
      {/* アップロードボタン */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-rose-500 text-white text-sm rounded-lg hover:bg-rose-600 transition-colors">
          <Upload className="h-3.5 w-3.5" />
          写真をアップロード
        </button>
      </div>

      {/* フィルターパネル */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline-block h-4 w-4 mr-2 text-rose-500" />
              日付で絞り込み
            </label>
            <div className="relative">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="inline-block h-4 w-4 mr-2 text-rose-500" />
              タグで絞り込み
            </label>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTags(prev =>
                        prev.includes(tag)
                          ? prev.filter(t => t !== tag)
                          : [...prev, tag]
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-rose-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  選択をクリア
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* アルバム */}
      {Object.entries(groupedPhotos)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([date, photos]) => (
          <div key={date} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-xl font-bold text-gray-800 px-4 py-2 bg-gray-50 rounded-full">
                {date}
              </h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            <PhotoGallery photos={photos} onPhotoSelect={setSelectedPhoto} />
          </div>
        ))}

      {/* 写真モーダル */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-6">
              <p className="text-white text-lg font-medium mb-2">{selectedPhoto.caption}</p>
              <div className="flex items-center gap-2 text-white/80">
                <Camera className="h-4 w-4" />
                <span className="text-sm">{selectedPhoto.date}</span>
              </div>
              {selectedPhoto.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <Tag className="h-4 w-4 text-white/80" />
                  <div className="flex flex-wrap gap-2">
                    {selectedPhoto.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-white/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 写真が見つからない場合 */}
      {Object.keys(groupedPhotos).length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            選択された条件に一致する写真が見つかりませんでした。
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoPanel;
