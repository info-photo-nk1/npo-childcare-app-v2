import React, { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import MessagePanel from '../components/contact/MessagePanel';
import PhotoPanel from '../components/contact/PhotoPanel';
import DailyRecordPanel from '../components/contact/DailyRecordPanel';
import GrowthPanel from '../components/contact/GrowthPanel';
import AllergyPanel from '../components/contact/AllergyPanel';
import SchedulePanel from '../components/contact/SchedulePanel';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const tabs = [
    { id: 'messages', label: 'メッセージ' },
    { id: 'photos', label: '写真' },
    { id: 'daily', label: '保育記録' },
    { id: 'growth', label: '成長記録' },
    { id: 'allergy', label: 'アレルギー' },
    { id: 'schedule', label: 'スケジュール' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ContactHeader />
      
      {/* タブナビゲーション */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-4 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-3 px-3 border-b-2 font-medium text-sm whitespace-nowrap
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* タブコンテンツ */}
      <div className="mt-6">
        {activeTab === 'messages' && <MessagePanel />}
        {activeTab === 'photos' && <PhotoPanel />}
        {activeTab === 'daily' && <DailyRecordPanel />}
        {activeTab === 'growth' && <GrowthPanel />}
        {activeTab === 'allergy' && <AllergyPanel />}
        {activeTab === 'schedule' && <SchedulePanel />}
      </div>
    </div>
  );
};

export default ContactPage;
