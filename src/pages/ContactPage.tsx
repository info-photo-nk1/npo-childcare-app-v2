import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import ContactHeader from '../components/contact/ContactHeader';
import MessagePanel from '../components/contact/MessagePanel';
import PhotoPanel from '../components/contact/PhotoPanel';
import DailyRecordPanel from '../components/contact/DailyRecordPanel';
import GrowthPanel from '../components/contact/GrowthPanel';
import AllergyPanel from '../components/contact/AllergyPanel';
import SchedulePanel from '../components/contact/SchedulePanel';
import { Bell, Image, Book, Activity, AlertTriangle, Calendar } from 'lucide-react';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('messages');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ContactHeader />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="messages"><Bell className="mr-2 h-4 w-4" />お知らせ</TabsTrigger>
          <TabsTrigger value="photos"><Image className="mr-2 h-4 w-4" />写真</TabsTrigger>
          <TabsTrigger value="daily-record"><Book className="mr-2 h-4 w-4" />保育記録</TabsTrigger>
          <TabsTrigger value="growth"><Activity className="mr-2 h-4 w-4" />成長記録</TabsTrigger>
          <TabsTrigger value="allergy"><AlertTriangle className="mr-2 h-4 w-4" />アレルギー</TabsTrigger>
          <TabsTrigger value="schedule"><Calendar className="mr-2 h-4 w-4" />スケジュール</TabsTrigger>
        </TabsList>

        <TabsContent value="messages">
          <MessagePanel />
        </TabsContent>

        <TabsContent value="photos">
          <PhotoPanel />
        </TabsContent>

        <TabsContent value="daily-record">
          <DailyRecordPanel />
        </TabsContent>

        <TabsContent value="growth">
          <GrowthPanel />
        </TabsContent>

        <TabsContent value="allergy">
          <AllergyPanel />
        </TabsContent>

        <TabsContent value="schedule">
          <SchedulePanel />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactPage;
