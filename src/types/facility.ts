export interface Facility {
  id: string;
  name: string;
  type: 'nursery' | 'kindergarten' | 'support_center' | 'community_center' | 'temporary_care' | 'family_support';
  address: string;
  description: string;
  capacity: number;
  availableSpots: number;
  rating: number;
  images: string[];
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SearchFilters {
  type?: Facility['type'];
  hasAvailableSpots?: boolean;
  minRating?: number;
  features?: string[];
  distance?: number;
}