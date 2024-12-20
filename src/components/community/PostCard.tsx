import React from 'react';
import { MessageCircle, Heart, Tag } from 'lucide-react';
import type { Post } from '../../types/community';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  const categoryColors = {
    question: 'bg-yellow-100 text-yellow-800',
    share: 'bg-blue-100 text-blue-800',
    event: 'bg-green-100 text-green-800',
    recipe: 'bg-purple-100 text-purple-800',
    tips: 'bg-rose-100 text-rose-800',
  };

  const categoryLabels = {
    question: '相談',
    share: '共有',
    event: 'イベント',
    recipe: 'レシピ',
    tips: 'コツ・ヒント',
  };

  return (
    <article
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200" />
            )}
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{post.content}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">{post.comments.length}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;