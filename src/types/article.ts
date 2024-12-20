export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  imageUrl: string;
  readingTime: number;
  likes: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}