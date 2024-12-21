import React from 'react';

const FaqPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">よくある質問</h1>
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            サービスについて
          </h3>
          <p className="mt-2 text-base text-gray-500">
            当サービスに関する一般的な質問とその回答を掲載しています。
          </p>
        </div>
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            アカウントについて
          </h3>
          <p className="mt-2 text-base text-gray-500">
            アカウントの作成、管理に関する質問とその回答を掲載しています。
          </p>
        </div>
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            お問い合わせについて
          </h3>
          <p className="mt-2 text-base text-gray-500">
            お問い合わせ方法に関する質問とその回答を掲載しています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
