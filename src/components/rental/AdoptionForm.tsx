import React from 'react';

interface AdoptionFormProps {
  onSubmit: (nickname: string, comment: string) => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nickname = (event.target as HTMLFormElement).nickname.value;
    const comment = (event.target as HTMLFormElement).comment.value;
    onSubmit(nickname, comment);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">リクエストを送信</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nickname" className="block text-gray-700 text-sm font-bold mb-2">
            ニックネーム
          </label>
          <input
            type="text"
            id="nickname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">
            コメント
          </label>
          <textarea
            id="comment"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            リクエストを送信
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdoptionForm;
