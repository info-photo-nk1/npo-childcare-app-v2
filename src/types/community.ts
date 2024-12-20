export type PostCategory = 'question' | 'share' | 'event' | 'recipe' | 'tips';

export interface Post {
  id: string;
  title: string;
  content: string;
  category: PostCategory;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  likes: number;
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  likes: number;
}

export interface PostFilters {
  category?: PostCategory;
  tag?: string;
  sortBy?: 'latest' | 'popular';
}