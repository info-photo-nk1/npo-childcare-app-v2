import React, { useState } from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';
import type { Schedule } from '../../types/contact';

const SchedulePanel = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newSchedule, setNewSchedule] = useState<Partial<Schedule>>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    type: 'event',
    isAllDay: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSchedule.title && newSchedule.date) {
      setSchedules([...schedules, { ...newSchedule, id: Date.now().toString() } as Schedule]);
      setShowForm(false);
      setNewSchedule({
        title: '',
        date: new Date().toISOString().split('T')[0],
        type: 'event',
        isAllDay: false,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">スケジュール</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          <Plus className="h-4 w-4" />
          予定を追加
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                タイトル
              </label>
              <input
                type="text"
                value={newSchedule.title}
                onChange={(e) => setNewSchedule({ ...newSchedule, title: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="inline-block h-4 w-4 mr-1" />
                  日付
                </label>
                <input
                  type="date"
                  value={newSchedule.date}
                  onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  種類
                </label>
                <select
                  value={newSchedule.type}
                  onChange={(e) => setNewSchedule({ ...newSchedule, type: e.target.value as Schedule['type'] })}
                  className="w-full px-3 py-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="event">イベント</option>
                  <option value="reminder">リマインダー</option>
                  <option value="appointment">予約</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newSchedule.isAllDay}
                  onChange={(e) => setNewSchedule({ ...newSchedule, isAllDay: e.target.checked })}
                  className="rounded border-gray-300 text-rose-500 focus:ring-rose-500"
                />
                <span className="ml-2 text-sm text-gray-700">終日</span>
              </label>
            </div>

            {!newSchedule.isAllDay && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    開始時間
                  </label>
                  <input
                    type="time"
                    value={newSchedule.startTime || ''}
                    onChange={(e) => setNewSchedule({ ...newSchedule, startTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    終了時間
                  </label>
                  <input
                    type="time"
                    value={newSchedule.endTime || ''}
                    onChange={(e) => setNewSchedule({ ...newSchedule, endTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                説明
              </label>
              <textarea
                value={newSchedule.description || ''}
                onChange={(e) => setNewSchedule({ ...newSchedule, description: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                rows={3}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
            >
              保存
            </button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-medium text-gray-900">今後の予定</h3>
          </div>
          
          {schedules.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              予定はありません
            </p>
          ) : (
            <div className="space-y-4">
              {schedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className={`p-2 rounded-lg ${
                    schedule.type === 'event' ? 'bg-blue-100 text-blue-600' :
                    schedule.type === 'reminder' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{schedule.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {schedule.date}
                      {!schedule.isAllDay && schedule.startTime && (
                        <> {schedule.startTime} - {schedule.endTime}</>
                      )}
                    </p>
                    {schedule.description && (
                      <p className="text-sm text-gray-500 mt-2">{schedule.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePanel;