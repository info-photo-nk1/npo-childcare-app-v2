import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">お問い合わせ</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            お問い合わせフォーム
          </h3>
          <p className="mt-2 text-base text-gray-500">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          {/* お問い合わせフォームのコンポーネントをここに追加 */}
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            電話でのお問い合わせ
          </h3>
          <p className="mt-2 text-base text-gray-500">
            お急ぎの場合は、お電話にてお問い合わせください。
            <br />
            電話番号：XXX-XXX-XXXX
            <br />
            受付時間：平日 9:00〜17:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
