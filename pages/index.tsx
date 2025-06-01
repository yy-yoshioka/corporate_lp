import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            マイコープへようこそ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
            日本品質のオフショア開発で、コスト削減と高品質を両立
            <br />
            お客様のアイデアを、私たちの専門チームが現実に変えます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                お問い合わせ
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              サービス一覧
            </Link>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            私たちの強み
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            確かな技術力と日本品質で、お客様のビジネスを成功に導きます
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'コスト効率',
                description: '品質を維持しながら、開発コストを最適化いたします',
                icon: '💰',
                gradient: 'from-emerald-500 to-teal-600',
              },
              {
                title: '高品質',
                description: '厳格なテストと品質保証プロセスで確実な成果をお約束',
                icon: '⭐',
                gradient: 'from-blue-500 to-indigo-600',
              },
              {
                title: '迅速な納期',
                description: 'アジャイル開発手法により、スピーディーな市場投入を実現',
                icon: '🚀',
                gradient: 'from-slate-500 to-gray-600',
              },
            ].map((strength, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${strength.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 bg-gradient-to-br from-gray-50 to-slate-50 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            サービス
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            お客様のビジネスニーズに合わせた包括的なソリューションを提供
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Webシステム開発',
                description:
                  '最新のフレームワークとベストプラクティスを活用した、包括的なWebシステム開発ソリューション',
                icon: '🌐',
                color: 'blue',
              },
              {
                title: 'モバイルアプリ開発',
                description:
                  'iOS・Android対応のネイティブパフォーマンスを実現するモバイルアプリケーション開発',
                icon: '📱',
                color: 'indigo',
              },
              {
                title: 'クラウドソリューション',
                description:
                  'スケーラブルなアプリケーション構築のためのクラウドインフラとDevOpsソリューション',
                icon: '☁️',
                color: 'slate',
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors group-hover:gap-3 transition-all duration-300`}
                  >
                    詳細を見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">プロジェクトを始めませんか？</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                お気軽にご相談・お見積りをご依頼ください。お客様のビジョンを現実に変えるお手伝いをいたします。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                今すぐお問い合わせ
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
        </div>
      </section>
    </div>
  );
}
