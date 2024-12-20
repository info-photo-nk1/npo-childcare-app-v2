import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DailyRecordForm from './DailyRecordForm';
import type { DailyRecord } from '../../types/contact';

const DailyRecordPanel = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const handleSave = (record: Partial<DailyRecord>) => {
    console.log('Saving record:', { ...record, date: selectedDate });
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <Calendar className="inline-block h-4 w-4 mr-1" />
          記録する日付
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <DailyRecordForm onSave={handleSave} />
      </div>
    </div>
  );
};

export default DailyRecordPanel;