import React from 'react';

const HelpCenterPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">ヘルプセンター</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            よくあるご質問
          </h3>
          <p className="mt-2 text-base text-gray-500">
            よくお問い合わせいただくご質問とその回答をまとめています。
          </p>
          {/* よくあるご質問へのリンクやセクションをここに追加 */}
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            お問い合わせ
          </h3>
          <p className="mt-2 text-base text-gray-500">
            お問い合わせフォーム、電話番号、受付時間などの情報を掲載しています。
          </p>
          {/* お問い合わせページへのリンクをここに追加 */}
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            利用規約
          </h3>
          <p className="mt-2 text-base text-gray-500">
            当サービスの利用規約について説明しています。
          </p>
          {/* 利用規約ページへのリンクをここに追加 */}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
