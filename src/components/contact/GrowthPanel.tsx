import React, { useState } from 'react';
import { Calendar, LineChart, Plus } from 'lucide-react';
import type { GrowthRecord } from '../../types/contact';

const GrowthPanel = () => {
  const [records, setRecords] = useState<GrowthRecord[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newRecord, setNewRecord] = useState<Partial<GrowthRecord>>({
    date: new Date().toISOString().split('T')[0],
    height: 0,
    weight: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRecord.height && newRecord.weight && newRecord.date) {
      setRecords([...records, newRecord as GrowthRecord]);
      setShowForm(false);
      setNewRecord({
        date: new Date().toISOString().split('T')[0],
        height: 0,
        weight: 0,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">成長記録</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          <Plus className="h-4 w-4" />
          記録を追加
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="inline-block h-4 w-4 mr-1" />
                測定日
              </label>
              <input
                type="date"
                value={newRecord.date}
                onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                身長 (cm)
              </label>
              <input
                type="number"
                step="0.1"
                value={newRecord.height || ''}
                onChange={(e) => setNewRecord({ ...newRecord, height: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                体重 (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={newRecord.weight || ''}
                onChange={(e) => setNewRecord({ ...newRecord, weight: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メモ
            </label>
            <textarea
              value={newRecord.notes || ''}
              onChange={(e) => setNewRecord({ ...newRecord, notes: e.target.value })}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              rows={3}
            />
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

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <LineChart className="h-5 w-5 text-gray-500" />
          <h3 className="text-lg font-medium text-gray-900">成長グラフ</h3>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-500">
          グラフ表示は開発中です
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                測定日
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                身長 (cm)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                体重 (kg)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                メモ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.height}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.weight}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {record.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GrowthPanel;