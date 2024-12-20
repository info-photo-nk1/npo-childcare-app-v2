import React from 'react';
import { Sun, Moon, Utensils } from 'lucide-react';
import type { DailyRecord } from '../../types/contact';

interface DailyRecordFormProps {
  record?: DailyRecord;
  onSave: (record: Partial<DailyRecord>) => void;
}

const DailyRecordForm: React.FC<DailyRecordFormProps> = ({ record, onSave }) => {
  const moodOptions = [
    { value: 'good', label: '良い', emoji: '😊' },
    { value: 'normal', label: '普通', emoji: '😐' },
    { value: 'bad', label: '悪い', emoji: '😢' },
  ];

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          今日の様子
        </label>
        <div className="flex gap-4">
          {moodOptions.map(({ value, label, emoji }) => (
            <label key={value} className="flex-1">
              <input
                type="radio"
                name="mood"
                value={value}
                checked={record?.mood === value}
                onChange={(e) => onSave({ mood: e.target.value as DailyRecord['mood'] })}
                className="sr-only"
              />
              <div className={`
                flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer
                ${record?.mood === value ? 'border-rose-500 bg-rose-50' : 'border-gray-200'}
              `}>
                <span className="text-2xl">{emoji}</span>
                <span className="mt-1 text-sm">{label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Utensils className="h-4 w-4" />
            食事
          </div>
        </label>
        <div className="grid grid-cols-3 gap-4">
          {['breakfast', 'lunch', 'snack'].map((meal) => (
            <div key={meal}>
              <label className="block text-sm text-gray-600 mb-1">
                {meal === 'breakfast' ? '朝食'
                  : meal === 'lunch' ? '昼食'
                  : 'おやつ'}
              </label>
              <select
                value={record?.meals?.[meal as keyof typeof record.meals] || 0}
                onChange={(e) => onSave({
                  meals: { ...record?.meals, [meal]: Number(e.target.value) }
                })}
                className="w-full rounded-md border-gray-300"
              >
                {[0, 1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value * 20}%
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            お昼寝
          </div>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">開始時間</label>
            <input
              type="time"
              value={record?.nap?.start || ''}
              onChange={(e) => onSave({
                nap: { ...record?.nap, start: e.target.value }
              })}
              className="w-full rounded-md border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">終了時間</label>
            <input
              type="time"
              value={record?.nap?.end || ''}
              onChange={(e) => onSave({
                nap: { ...record?.nap, end: e.target.value }
              })}
              className="w-full rounded-md border-gray-300"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          活動内容
        </label>
        <textarea
          value={record?.activities?.join('\n') || ''}
          onChange={(e) => onSave({ activities: e.target.value.split('\n') })}
          className="w-full rounded-md border-gray-300"
          rows={4}
          placeholder="今日の活動内容を入力してください"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          特記事項
        </label>
        <textarea
          value={record?.notes || ''}
          onChange={(e) => onSave({ notes: e.target.value })}
          className="w-full rounded-md border-gray-300"
          rows={3}
          placeholder="特記事項があれば入力してください"
        />
      </div>
    </form>
  );
}

export default DailyRecordForm;