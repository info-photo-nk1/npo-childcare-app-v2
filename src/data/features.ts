import { Map, Info, MessageSquare, Package, HeadphonesIcon } from 'lucide-react';

export const features = [
  {
    icon: Map,
    title: '施設検索',
    description: '近くの保育施設や子育て支援施設を簡単に探せます',
    link: '/match',
    color: 'bg-blue-500',
  },
  {
    icon: Info,
    title: '育児情報',
    description: '専門家による育児情報や、みんなの体験談を共有',
    link: '/info',
    color: 'bg-green-500',
  },
  {
    icon: MessageSquare,
    title: '連絡帳',
    description: '保育園との連絡や、お子様の成長記録を管理',
    link: '/contact',
    color: 'bg-yellow-500',
  },
  {
    icon: Package,
    title: '用品レンタル',
    description: 'ベビー用品のレンタル・シェアリングサービス',
    link: '/rental',
    color: 'bg-purple-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'オンライン相談',
    description: '専門家に気軽に相談できるオンライン相談',
    link: '/consult',
    color: 'bg-rose-500',
  },
];