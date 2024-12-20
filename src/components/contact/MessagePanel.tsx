import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import MessageList from './MessageList';
import { messages } from '../../data/messages';

const MessagePanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredMessages = messages.filter(message => {
    if (filter !== 'all' && message.sender.role !== filter) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        message.title.toLowerCase().includes(query) ||
        message.content.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="メッセージを検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
        >
          <option value="all">すべて</option>
          <option value="teacher">先生から</option>
          <option value="parent">保護者から</option>
        </select>
      </div>

      <MessageList
        messages={filteredMessages}
        onMessageSelect={(message) => console.log('Selected message:', message)}
      />
    </div>
  );
};

export default MessagePanel;