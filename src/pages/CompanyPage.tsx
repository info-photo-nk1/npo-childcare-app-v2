import React from 'react';

const CompanyPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">会社概要</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            会社名
          </h3>
          <p className="mt-2 text-base text-gray-500">
            株式会社 みんなで子育て
          </p>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            所在地
          </h3>
          <p className="mt-2 text-base text-gray-500">
            東京都渋谷区...
          </p>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            設立年月日
          </h3>
          <p className="mt-2 text-base text-gray-500">
            2024年4月1日
          </p>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            事業内容
          </h3>
          <p className="mt-2 text-base text-gray-500">
            子育て支援プラットフォームの運営
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
