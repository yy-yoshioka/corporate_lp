import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              具体的な
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                サービス内容
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              実績に基づいた、結果にコミットするサービスラインナップ
              <br />
              貴社の課題に最適なソリューションをご提案します
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offshore Development */}
            <div id="オフショア開発" className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="text-4xl mb-4">🌐</div>
                <h2 className="text-2xl font-bold mb-2">オフショア開発</h2>
                <p className="text-blue-100">最大40%のコスト削減を実現</p>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">日本人PMが要件定義から納品まで管理</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">24時間リレー開発で納期半減</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">3段階コードレビューで品質保証</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600 mb-2">料金目安</div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">月額30万円〜</div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="text-sm font-semibold text-blue-800 mb-1">導入事例</div>
                    <p className="text-sm text-gray-700">
                      大手EC企業様：開発期間50%短縮、年間480万円のコスト削減
                    </p>
                  </div>
                  <Link
                    href="/contact?service=offshore"
                    className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    詳細を相談する
                  </Link>
                </div>
              </div>
            </div>

            {/* AI Development */}
            <div id="AI開発" className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
                <div className="text-4xl mb-4">🤖</div>
                <h2 className="text-2xl font-bold mb-2">AI開発</h2>
                <p className="text-purple-100">業務効率を最大70%改善</p>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">ChatGPT/Claude API統合</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">カスタムAIモデル開発</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">既存システムへのAI組み込み</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600 mb-2">料金目安</div>
                  <div className="text-2xl font-bold text-purple-600 mb-4">初期費用50万円〜</div>
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <div className="text-sm font-semibold text-purple-800 mb-1">導入事例</div>
                    <p className="text-sm text-gray-700">
                      地方銀行様：問い合わせ対応時間70%削減、顧客満足度10%向上
                    </p>
                  </div>
                  <Link
                    href="/contact?service=ai"
                    className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    詳細を相談する
                  </Link>
                </div>
              </div>
            </div>

            {/* SaaS Development */}
            <div id="SaaS開発" className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
                <div className="text-4xl mb-4">☁️</div>
                <h2 className="text-2xl font-bold mb-2">SaaS開発</h2>
                <p className="text-emerald-100">最短2週間でMVPリリース</p>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">フルスタック開発（FE/BE/インフラ）</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">スケーラブルなアーキテクチャ設計</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">継続的な改善・運用サポート</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-gray-600 mb-2">料金目安</div>
                  <div className="text-2xl font-bold text-emerald-600 mb-4">MVP開発100万円〜</div>
                  <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                    <div className="text-sm font-semibold text-emerald-800 mb-1">導入事例</div>
                    <p className="text-sm text-gray-700">
                      HRテック企業様：2週間でMVPリリース、3ヶ月で100社導入達成
                    </p>
                  </div>
                  <Link
                    href="/contact?service=saas"
                    className="block text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    詳細を相談する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">その他のサービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'クラウド移行支援',
                description:
                  'オンプレミスからクラウドへの移行で、インフラコストを平均40%削減。AWS/GCP/Azureに対応。',
                icon: '☁️',
                features: ['インフラ設計', 'データ移行', '24時間監視体制'],
                caseStudy: '製造業様：年間600万円のコスト削減',
                price: '要見積もり',
              },
              {
                title: '技術コンサルティング',
                description: '技術選定から開発プロセス改善まで、豊富な実績を基にアドバイス。',
                icon: '💡',
                features: ['技術スタック選定', 'アーキテクチャ設計', 'チーム育成支援'],
                caseStudy: 'スタートアップ様：開発効率50%向上',
                price: '月額20万円〜',
              },
              {
                title: 'UI/UXデザイン',
                description: 'ユーザー中心設計で、コンバージョン率を平均30%改善。',
                icon: '🎨',
                features: ['ユーザーリサーチ', 'プロトタイプ作成', 'デザインシステム構築'],
                caseStudy: 'ECサイト様：CVR 2.5%→3.3%',
                price: '50万円〜',
              },
              {
                title: 'セキュリティ診断',
                description: '脆弱性診断からペネトレーションテストまで、包括的なセキュリティ対策。',
                icon: '🔒',
                features: ['脆弱性診断', 'ペンテスト', 'セキュリティ教育'],
                caseStudy: '金融機関様：重大脆弱性を事前に発見・対策',
                price: '100万円〜',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-blue-800 mb-1">導入事例</div>
                    <p className="text-xs text-gray-700">{service.caseStudy}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">{service.price}</span>
                    <Link
                      href={`/contact?service=${service.title}`}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">サービス提供の流れ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: '無料相談（30分）',
                  description: '貴社の課題をヒアリングし、最適なサービスをご提案',
                },
                {
                  step: 2,
                  title: '詳細要件定義',
                  description: '日本人PMが要件を整理し、開発スコープを明確化',
                },
                {
                  step: 3,
                  title: '見積もり・契約',
                  description: '透明性の高い料金体系で、詳細な見積もりをご提示',
                },
                {
                  step: 4,
                  title: '開発開始',
                  description: 'アジャイル開発で、2週間スプリントで成果物を納品',
                },
                {
                  step: 5,
                  title: '運用・保守',
                  description: '納品後も継続的な改善と24時間サポートを提供',
                },
              ].map((process, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                  {index < 4 && (
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">対応技術スタック</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
              { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'Go'] },
              { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
              { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
              { category: 'Cloud', techs: ['AWS', 'GCP', 'Azure', 'Vercel'] },
              { category: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'] },
              { category: 'DevOps', techs: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
              { category: 'Others', techs: ['Blockchain', 'IoT', 'AR/VR', 'WebRTC'] },
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-800 mb-3">{tech.category}</h3>
                <div className="space-y-1">
                  {tech.techs.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-gray-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">最適なサービスをご提案します</h2>
            <p className="text-xl mb-8 text-blue-50">
              まずは30分の無料相談で、貴社の課題をお聞かせください
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              無料相談を予約する
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
