import React from 'react';
import { useParams } from 'react-router-dom';
import { mockFacilities } from '../data/mockFacilities'; // 仮のデータ

const FacilityDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const facility = mockFacilities.find((f) => f.id === id);

  if (!facility) {
    return <div>施設が見つかりません</div>;
  }

  return (
    <div>
      <h1>{facility.name}</h1>
      <p>{facility.address}</p>
      {/* その他の施設情報を表示 */}
    </div>
  );
};

export default FacilityDetailPage;
