import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">プライバシーポリシー</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            個人情報の取得について
          </h3>
          <p className="mt-2 text-base text-gray-500">
            当サービスでは、利用者の個人情報を適切に取得します。
          </p>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            個人情報の利用目的
          </h3>
          <p className="mt-2 text-base text-gray-500">
            取得した個人情報は、以下の目的で利用します。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>サービスの提供・運営のため</li>
            <li>お問い合わせ対応のため</li>
            <li>その他、プライバシーポリシーに定める目的</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            個人情報の第三者提供について
          </h3>
          <p className="mt-2 text-base text-gray-500">
            取得した個人情報は、法令に基づく場合を除き、第三者に提供することはありません。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
