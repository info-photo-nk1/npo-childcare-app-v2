import type { Facility } from '../types/facility';

export const mockFacilities: Facility[] = [
  {
    id: '1',
    name: 'さくら保育園',
    type: 'nursery',
    address: '東京都渋谷区神宮前1-1-1',
    description: `さくら保育園は、子どもたちの心身の健やかな成長を第一に考え、豊かな環境の中で様々な経験を通じて学べる場を提供しています。

当園では、以下のような特徴的な保育プログラムを実施しています：

・英語教育：ネイティブ講師による週2回の英語レッスン
・体操教室：専門講師による体操指導
・音楽教室：ピアノやリトミックを取り入れた音楽活動
・季節の行事：伝統行事を大切にした保育活動

また、栄養バランスの取れた給食を提供し、食育にも力を入れています。`,
    capacity: 120,
    availableSpots: 5,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['延長保育', '給食あり', '園庭あり', '英語教育', '体操教室', '音楽教室', 'お昼寝あり'],
    coordinates: {
      lat: 35.671167,
      lng: 139.705674
    },
    phone: '03-1234-5678',
    email: 'info@sakura-hoikuen.example.com',
    website: 'https://sakura-hoikuen.example.com',
    hours: {
      weekday: '7:00 - 18:00',
      saturday: '8:00 - 17:00',
      sunday: '休園'
    }
  },
  {
    id: '2',
    name: 'みどり幼稚園',
    type: 'kindergarten',
    address: '東京都渋谷区代々木2-2-2',
    description: `創立50年の伝統ある幼稚園です。豊かな自然環境の中で、子どもたちの創造性と自主性を育みます。

特色ある教育プログラム：
・モンテッソーリ教育の導入
・週3回のネイティブ講師による英語レッスン
・体操や水泳などの体育活動
・季節の行事や伝統文化体験

また、預かり保育も実施しており、働く保護者の方々のニーズにも対応しています。`,
    capacity: 90,
    availableSpots: 0,
    rating: 4.2,
    images: [
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['預かり保育', '英語教育', '体操教室', 'モンテッソーリ教育', '水泳指導', '給食あり'],
    coordinates: {
      lat: 35.683033,
      lng: 139.701636
    },
    phone: '03-2345-6789',
    email: 'info@midori-kindergarten.example.com',
    website: 'https://midori-kindergarten.example.com',
    hours: {
      weekday: '9:00 - 14:00',
      saturday: '9:00 - 12:00',
      sunday: '休園'
    }
  },
  {
    id: '3',
    name: '渋谷区子育て支援センター',
    type: 'support_center',
    address: '東京都渋谷区代々木3-3-3',
    description: `地域の子育て家庭を総合的に支援する施設です。

提供サービス：
・育児相談（専門の保育士・看護師が対応）
・一時預かり保育
・親子で参加できるイベントの開催
・子育て情報の提供
・育児サークル活動の支援

また、定期的に専門家による講座や相談会も開催しています。`,
    capacity: 50,
    availableSpots: 15,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['一時預かり', '育児相談', '親子イベント', '専門家相談', '情報提供', 'サークル活動'],
    coordinates: {
      lat: 35.681167,
      lng: 139.703674
    },
    phone: '03-3456-7890',
    email: 'info@shibuya-kosodate.example.com',
    website: 'https://shibuya-kosodate.example.com',
    hours: {
      weekday: '9:00 - 17:00',
      saturday: '9:00 - 15:00',
      sunday: '休館'
    }
  },
  {
    id: '4',
    name: 'はぐくみひろば',
    type: 'community_center',
    address: '東京都渋谷区恵比寿4-4-4',
    description: `親子で楽しく過ごせる地域密着型の交流スペースです。

施設の特徴：
・広々としたプレイルーム
・清潔な授乳室とおむつ替えスペース
・充実したおもちゃ図書館
・季節のイベント開催
・子育て相談コーナー

コミュニティ作りを大切にし、親子の居場所づくりを支援しています。`,
    capacity: 40,
    availableSpots: 20,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['プレイルーム', '授乳室', 'おもちゃ図書館', '子育て相談', 'イベントスペース'],
    coordinates: {
      lat: 35.643033,
      lng: 139.711636
    },
    phone: '03-4567-8901',
    email: 'info@hagukumi-hiroba.example.com',
    website: 'https://hagukumi-hiroba.example.com',
    hours: {
      weekday: '10:00 - 16:00',
      saturday: '10:00 - 15:00',
      sunday: '休館'
    }
  },
  {
    id: '5',
    name: 'にこにこ保育ルーム',
    type: 'temporary_care',
    address: '東京都渋谷区広尾5-5-5',
    description: `急な用事や緊急時にも対応可能な一時保育施設です。

サービスの特徴：
・時間単位での柔軟な保育
・栄養バランスの取れた給食提供
・病後児保育の実施
・経験豊富な保育士による保育
・安全で清潔な保育環境

予約システムを導入し、急な利用にも可能な限り対応いたします。`,
    capacity: 30,
    availableSpots: 8,
    rating: 4.4,
    images: [
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587652990399-0864c4759fa5?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['時間単位利用可', '給食提供', '病後児保育', '予約システム', '経験豊富な保育士'],
    coordinates: {
      lat: 35.651167,
      lng: 139.715674
    },
    phone: '03-5678-9012',
    email: 'info@nikoniko-hoiku.example.com',
    website: 'https://nikoniko-hoiku.example.com',
    hours: {
      weekday: '8:00 - 19:00',
      saturday: '9:00 - 18:00',
      sunday: '休み'
    }
  }
];
