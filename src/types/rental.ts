export type ItemCondition = 'new' | 'like_new' | 'good' | 'fair';
export type ListingType = 'rent' | 'sell' | 'give';

export interface RentalItem {
  id: string;
  title: string;
  description: string;
  category: string;
  condition: ItemCondition;
  listingType: ListingType;
  price: number;
  period?: string;
  images: string[];
  location: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  createdAt: string;
  tags: string[];
}

export interface RentalFilters {
  category?: string;
  listingType?: ListingType;
  minPrice?: number;
  maxPrice?: number;
  condition?: ItemCondition[];
  location?: string;
}