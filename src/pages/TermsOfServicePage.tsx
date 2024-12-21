import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">利用規約</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            第1条（適用）
          </h3>
          <p className="mt-2 text-base text-gray-500">
            本規約は、本サービスの利用に関するすべての行為に適用されます。
          </p>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            第2条（利用登録）
          </h3>
          <p className="mt-2 text-base text-gray-500">
            本サービスの利用には、利用登録が必要となる場合があります。
          </p>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            第3条（禁止事項）
          </h3>
          <p className="mt-2 text-base text-gray-500">
            利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>法令に違反する行為</li>
            <li>公序良俗に反する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
