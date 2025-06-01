import Link from 'next/link';

export default function Services() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">サービス一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h2 className="font-semibold">AIチャット導入支援</h2>
          <p className="mb-2">月間2,000件の問い合わせを自動化する事例あり。</p>
          <Link href="/solutions/ai-chat" className="text-blue-600">
            詳細を見る
          </Link>
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-semibold">オフショア開発コンサル</h2>
          <p className="mb-2">日本人PMが品質を担保し、平均40%のコスト削減。</p>
          <Link href="/solutions/offshore-dev" className="text-blue-600">
            詳細を見る
          </Link>
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-semibold">SaaS開発</h2>
          <p className="mb-2">累計30社以上の立ち上げ実績。</p>
          <Link href="/solutions/saas" className="text-blue-600">
            詳細を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
