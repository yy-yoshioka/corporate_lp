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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-100"></div>
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Japanese Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg
            className="w-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="currentColor"
              className="text-blue-600"
            />
          </svg>
        </div>

        {/* Animated Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Tech Stack Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 opacity-20 animate-float">
            <svg className="w-20 h-20 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-10 opacity-20 animate-float-delayed">
            <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 2C13.5 2.44425 13.3069 2.86399 12.9725 3.14017C12.6382 3.41635 12.1957 3.51926 11.7606 3.41555C11.3256 3.31185 10.9456 3.01065 10.7239 2.58787C10.5022 2.16508 10.4608 1.66117 10.6098 1.20666C10.7588 0.752159 11.0831 0.389423 11.5 0.214568V2H11.5ZM16.2404 3.41556C15.8053 3.51927 15.3629 3.41636 15.0285 3.14018C14.6942 2.864 14.501 2.44426 14.501 2C14.501 1.55574 14.6942 1.136 15.0285 0.859824C15.3629 0.583645 15.8053 0.480729 16.2404 0.584434C16.6754 0.688138 17.0554 0.989341 17.2771 1.41213C17.4988 1.83491 17.5402 2.33882 17.3912 2.79333C17.2422 3.24784 16.9179 3.61058 16.501 3.78543V2H16.5Z" />
            </svg>
          </div>
          <div className="absolute top-40 left-32 opacity-15 animate-float">
            <svg className="w-24 h-24 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 13H15V19H9V13ZM3 13H7V19H3V13ZM17 13H21V19H17V13ZM13 3V11H21V3H13ZM15 5H19V9H15V5ZM3 3V11H11V3H3ZM5 5H9V9H5V5Z" />
            </svg>
          </div>
        </div>

        {/* Main Illustration */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 md:opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              stroke="currentColor"
              strokeWidth="2"
              className="text-indigo-600"
            />
            <circle
              cx="200"
              cy="200"
              r="90"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
            />
            <path
              d="M200 50 L250 150 L350 200 L250 250 L200 350 L150 250 L50 200 L150 150 Z"
              fill="currentColor"
              fillOpacity="0.1"
              className="text-blue-600"
            />
          </svg>
        </div>

        <div
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-blue-700 font-medium shadow-sm">
            <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
            日本企業の90%以上が満足
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
            OffshoreFlowへようこそ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-slate-700">
            OffshoreFlowで開発の流れを変える
            <br />
            お客様のアイデアを、スムーズな開発フローで実現します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              サービス一覧
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">500+</div>
              <div className="text-sm text-slate-600">プロジェクト完了</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">98%</div>
              <div className="text-sm text-slate-600">顧客満足度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">95%</div>
              <div className="text-sm text-slate-600">納期遵守率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">1%未満</div>
              <div className="text-sm text-slate-600">バグ発生率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">24/7</div>
              <div className="text-sm text-slate-600">サポート体制</div>
            </div>
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
                description: 'エンジニア単価を平均40%削減しながら品質を確保',
                icon: '💰',
                gradient: 'from-emerald-500 to-teal-600',
              },
              {
                title: '高品質',
                description: '納期遵守率95%、バグ発生率1%未満を維持する品質管理',
                icon: '⭐',
                gradient: 'from-blue-500 to-indigo-600',
              },
              {
                title: '迅速な納期',
                description: '24時間リレー開発で他社比2倍速の納期短縮',
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
                description: '年間50件以上の実績。PoCから本番運用まで一貫してサポートします',
                icon: '🌐',
                color: 'blue',
              },
              {
                title: 'モバイルアプリ開発',
                description: 'ストア評価平均4.5以上のアプリを多数リリースしています',
                icon: '📱',
                color: 'indigo',
              },
              {
                title: 'クラウドソリューション',
                description: '月間20万ユーザー対応のスケーラブル基盤とDevOpsを提供',
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">まずは無料相談から</h2>
              <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
                30分のオンラインヒアリングで課題を整理し、最短3日で概算見積りをご提示します。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                無料相談を予約
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
