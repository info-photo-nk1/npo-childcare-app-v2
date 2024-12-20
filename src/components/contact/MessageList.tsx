import React from 'react';
import { Mail, MailOpen } from 'lucide-react';
import type { Message } from '../../types/contact';

interface MessageListProps {
  messages: Message[];
  onMessageSelect: (message: Message) => void;
  onRead: (id: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, onMessageSelect, onRead }) => {
  return (
    <div className="space-y-2">
      {messages.map((message) => (
        <button
          key={message.id}
          onClick={() => {
            onMessageSelect(message);
            onRead(message.id);
          }}
          className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{message.date}</span>
            {message.isRead ? (
              <MailOpen className="h-4 w-4 text-gray-400" />
            ) : (
              <Mail className="h-4 w-4 text-rose-500" />
            )}
          </div>
          <h3 className="font-medium text-gray-900">{message.title}</h3>
          <div className="flex items-center mt-2">
            {message.sender.avatar ? (
              <img
                src={message.sender.avatar}
                alt={message.sender.name}
                className="h-6 w-6 rounded-full"
              />
            ) : (
              <div className="h-6 w-6 rounded-full bg-gray-200" />
            )}
            <span className="ml-2 text-sm text-gray-600">{message.sender.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

export default MessageList;
