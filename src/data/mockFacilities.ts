import type { Facility } from '../types/facility';

export const mockFacilities: Facility[] = [
  {
    id: '1',
    name: 'さくら保育園',
    type: 'nursery',
    address: '東京都渋谷区神宮前1-1-1',
    description: '自然豊かな環境で、のびのびと保育を行っています。',
    capacity: 120,
    availableSpots: 5,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['延長保育', '給食あり', '園庭あり'],
    coordinates: {
      lat: 35.671167,
      lng: 139.705674
    }
  },
  {
    id: '2',
    name: 'みどり幼稚園',
    type: 'kindergarten',
    address: '東京都渋谷区代々木2-2-2',
    description: '創立50年の伝統ある幼稚園です。',
    capacity: 90,
    availableSpots: 0,
    rating: 4.2,
    images: [
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['預かり保育', '英語教育', '体操教室'],
    coordinates: {
      lat: 35.683033,
      lng: 139.701636
    }
  },
  {
    id: '3',
    name: '渋谷区子育て支援センター',
    type: 'support_center',
    address: '東京都渋谷区代々木3-3-3',
    description: '地域の子育て家庭を支援します。',
    capacity: 50,
    availableSpots: 15,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['一時預かり', '育児相談', '親子イベント'],
    coordinates: {
      lat: 35.681167,
      lng: 139.703674
    }
  },
  {
    id: '4',
    name: 'はぐくみひろば',
    type: 'community_center',
    address: '東京都渋谷区恵比寿4-4-4',
    description: '親子で楽しく過ごせる交流スペースです。',
    capacity: 40,
    availableSpots: 20,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['プレイルーム', '授乳室', 'おもちゃ図書館'],
    coordinates: {
      lat: 35.643033,
      lng: 139.711636
    }
  },
  {
    id: '5',
    name: 'にこにこ保育ルーム',
    type: 'temporary_care',
    address: '東京都渋谷区広尾5-5-5',
    description: '急な用事でもお子様を安心してお預けいただけます。',
    capacity: 30,
    availableSpots: 8,
    rating: 4.4,
    images: [
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['時間単位利用可', '給食提供', '病後児保育'],
    coordinates: {
      lat: 35.651167,
      lng: 139.715674
    }
  }
];