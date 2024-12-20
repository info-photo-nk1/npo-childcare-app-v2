import type { Message } from '../types/contact';

export const messages: Message[] = [
  {
    id: '1',
    date: '2024-03-15',
    title: '明日の遠足について',
    content: '明日の遠足の持ち物についてお知らせいたします。',
    sender: {
      name: '山田先生',
      role: 'teacher',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    },
    isRead: false,
  },
  {
    id: '2',
    date: '2024-03-14',
    title: '今日の様子について',
    content: '今日は元気に過ごしました。',
    sender: {
      name: '佐藤先生',
      role: 'teacher',
    },
    isRead: true,
  },
];