import React from 'react';

const FaqPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">よくある質問</h1>
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">質問1：〇〇〇〇</h2>
        <p className="ml-5">回答1：〇〇〇〇</p>
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">質問2：〇〇〇〇</h2>
        <p className="ml-5">回答2：〇〇〇〇</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3">質問3：〇〇〇〇</h2>
        <p className="ml-5">回答3：〇〇〇〇</p>
      </div>
    </div>
  );
};

export default FaqPage;
