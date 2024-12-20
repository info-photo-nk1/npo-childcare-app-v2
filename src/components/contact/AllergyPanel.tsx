import React, { useState } from 'react';
import { AlertTriangle, Plus, X } from 'lucide-react';
import type { AllergyInfo } from '../../types/contact';

const AllergyPanel = () => {
  const [allergies, setAllergies] = useState<AllergyInfo[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newAllergy, setNewAllergy] = useState<Partial<AllergyInfo>>({
    allergen: '',
    severity: 'medium',
    symptoms: [],
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAllergy.allergen && newAllergy.severity) {
      setAllergies([...allergies, { ...newAllergy, id: Date.now().toString() } as AllergyInfo]);
      setShowForm(false);
      setNewAllergy({
        allergen: '',
        severity: 'medium',
        symptoms: [],
        notes: '',
      });
    }
  };

  const handleDelete = (id: string) => {
    setAllergies(allergies.filter(allergy => allergy.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">アレルギー情報</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          <Plus className="h-4 w-4" />
          アレルギーを追加
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                アレルゲン
              </label>
              <input
                type="text"
                value={newAllergy.allergen}
                onChange={(e) => setNewAllergy({ ...newAllergy, allergen: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                重症度
              </label>
              <select
                value={newAllergy.severity}
                onChange={(e) => setNewAllergy({ ...newAllergy, severity: e.target.value as AllergyInfo['severity'] })}
                className="w-full px-3 py-2 rounded-md border border-gray-300"
                required
              >
                <option value="low">軽度</option>
                <option value="medium">中度</option>
                <option value="high">重度</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              症状
            </label>
            <input
              type="text"
              value={newAllergy.symptoms?.join(', ')}
              onChange={(e) => setNewAllergy({ ...newAllergy, symptoms: e.target.value.split(',').map(s => s.trim()) })}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              placeholder="カンマ区切りで入力（例：発疹, かゆみ）"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              備考
            </label>
            <textarea
              value={newAllergy.notes}
              onChange={(e) => setNewAllergy({ ...newAllergy, notes: e.target.value })}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allergies.map((allergy) => (
          <div
            key={allergy.id}
            className="bg-white p-4 rounded-lg shadow-sm relative"
          >
            <button
              onClick={() => handleDelete(allergy.id)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-start gap-3">
              <AlertTriangle className={`h-5 w-5 flex-shrink-0 ${
                allergy.severity === 'high' ? 'text-red-500' :
                allergy.severity === 'medium' ? 'text-yellow-500' :
                'text-green-500'
              }`} />
              <div>
                <h3 className="font-medium text-gray-900">{allergy.allergen}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  重症度: {
                    allergy.severity === 'high' ? '重度' :
                    allergy.severity === 'medium' ? '中度' :
                    '軽度'
                  }
                </p>
                {allergy.symptoms.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">症状:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {allergy.symptoms.map((symptom, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {allergy.notes && (
                  <p className="mt-2 text-sm text-gray-600">{allergy.notes}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllergyPanel;