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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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

        <div
          className={`relative z-10 px-4 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-blue-700 font-medium border border-blue-200">
                <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
                月間10社以上の新規PoC案件を担当中
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                  開発コストを
                </span>
                <br />
                <span className="text-7xl md:text-8xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  40%削減
                </span>
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">最短2週間でMVPリリース</p>
                    <p className="text-sm text-gray-600">要件定義から開発・納品まで高速対応</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">24時間リレー開発で2倍速</p>
                    <p className="text-sm text-gray-600">日本とベトナムのタイムゾーンを活用</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">日本品質を保証</p>
                    <p className="text-sm text-gray-600">日本人PMによる品質管理体制</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    30分無料相談を予約
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
                <a
                  href="/download/offshore-guide"
                  className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-center"
                >
                  導入事例集をダウンロード
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  期間限定50%OFF
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                  導入までの流れ
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">無料相談（30分）</p>
                      <p className="text-sm text-gray-600">今すぐ相談可能</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">見積もり提出</p>
                      <p className="text-sm text-gray-600">最短3営業日</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">開発スタート</p>
                      <p className="text-sm text-gray-600">契約後1週間以内</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">MVP納品</p>
                      <p className="text-sm text-gray-600">最短2週間</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-3xl font-bold text-blue-600">合計: 最短3週間</p>
                  <p className="text-sm text-gray-600 mt-1">で成果を実感できます</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">500+</div>
              <div className="text-sm text-gray-600 mt-1">累計プロジェクト</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">95%</div>
              <div className="text-sm text-gray-600 mt-1">納期遵守率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">40%</div>
              <div className="text-sm text-gray-600 mt-1">平均コスト削減</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">24/7</div>
              <div className="text-sm text-gray-600 mt-1">サポート体制</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="px-4 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            なぜ
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              OffshoreFlow
            </span>
            が選ばれるのか
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            具体的な数値と実績で証明する、私たちの強み
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'コスト削減40%を実現',
                description:
                  '日本のエンジニア単価と比較して平均40%のコスト削減。月額50万円の開発費を30万円に圧縮した実績多数',
                icon: '💰',
                gradient: 'from-emerald-500 to-teal-600',
                stats: '実際の削減額：年間240万円',
                percentage: 40,
                color: 'emerald',
              },
              {
                title: '納期遵守率95%',
                description:
                  '24時間リレー開発体制により、通常の2倍速での開発を実現。500件以上のプロジェクトで95%の納期遵守率を達成',
                icon: '⭐',
                gradient: 'from-blue-500 to-indigo-600',
                stats: '最短納期：MVP2週間',
                percentage: 95,
                color: 'blue',
              },
              {
                title: 'バグ発生率1%未満',
                description:
                  '日本人PMによる品質管理と、3段階のコードレビュー体制。本番環境でのバグ発生率を1%未満に抑制',
                icon: '🚀',
                gradient: 'from-purple-500 to-pink-600',
                stats: '品質スコア：98/100',
                percentage: 98,
                color: 'purple',
              },
            ].map((strength, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${strength.gradient} opacity-10 rounded-full blur-3xl`}
                  ></div>

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${strength.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {strength.icon}
                  </div>

                  {/* Progress Circle */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - strength.percentage / 100)}`}
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`}>
                          <stop
                            offset="0%"
                            stopColor={
                              strength.color === 'emerald'
                                ? '#10b981'
                                : strength.color === 'blue'
                                  ? '#3b82f6'
                                  : '#9333ea'
                            }
                          />
                          <stop
                            offset="100%"
                            stopColor={
                              strength.color === 'emerald'
                                ? '#14b8a6'
                                : strength.color === 'blue'
                                  ? '#4f46e5'
                                  : '#ec4899'
                            }
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-800">
                        {strength.percentage}%
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{strength.description}</p>
                  <div
                    className={`text-sm font-bold text-${strength.color}-600 bg-${strength.color}-50 inline-block px-4 py-2 rounded-full`}
                  >
                    {strength.stats}
                  </div>
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
            具体的なサービス内容
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            実績に基づいた、結果にコミットするサービスラインナップ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'オフショア開発',
                description:
                  '日本人PMが要件整理 → ベトナム優秀チームが実装 → 日本で最終検証。ECサイト構築を通常3ヶ月→1.5ヶ月で完成させた実績あり',
                icon: '🌐',
                color: 'blue',
                caseStudy: '某ECサイト：開発期間50%短縮',
                price: '月額30万円〜',
              },
              {
                title: 'AIチャットボット開発',
                description:
                  '月間2,000件の問い合わせを自動応答。オペレーター工数30%削減、顧客満足度80%→90%に改善した銀行導入事例',
                icon: '🤖',
                color: 'indigo',
                caseStudy: '地方銀行：応答時間70%短縮',
                price: '初期費用50万円〜',
              },
              {
                title: 'クラウド移行支援',
                description:
                  'オンプレミスからAWSへの移行で、インフラコストを年間40%削減。24時間365日の監視体制で稼働率99.9%を実現',
                icon: '☁️',
                color: 'slate',
                caseStudy: '製造業：年間600万円削減',
                price: '要見積もり',
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-semibold text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">
                      {service.caseStudy}
                    </div>
                    <div className="text-sm font-semibold text-gray-600">{service.price}</div>
                  </div>
                  <Link
                    href={`/services#${service.title}`}
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

          {/* CTA for Services */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">どのサービスが最適かお悩みですか？</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              無料で最適プランをご提案
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

      {/* Development Process */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            開発プロセス
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            透明性の高い開発フローで、安心してプロジェクトを進められます
          </p>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: '無料相談・ヒアリング',
                  time: '30分',
                  description:
                    'お客様の課題とご要望を詳しくヒアリング。技術的な実現可能性を即座に判断し、概算見積もりをご提示',
                  icon: '💬',
                },
                {
                  step: '2',
                  title: '要件定義・見積もり',
                  time: '3営業日',
                  description:
                    '日本人PMが要件を整理し、詳細な見積もりとスケジュールを作成。必要に応じてPoC提案も実施',
                  icon: '📋',
                },
                {
                  step: '3',
                  title: '開発チーム編成',
                  time: '1週間',
                  description:
                    'プロジェクトに最適な開発チームを編成。過去の実績とスキルセットを基に最適なメンバーをアサイン',
                  icon: '👥',
                },
                {
                  step: '4',
                  title: '開発・週次レビュー',
                  time: '継続的',
                  description:
                    '2週間スプリントで開発を進行。毎週金曜日に進捗報告と成果物のレビューを実施',
                  icon: '⚡',
                },
                {
                  step: '5',
                  title: '納品・運用サポート',
                  time: '永続的',
                  description:
                    '完成したシステムを納品後も、月額サポートプランで継続的な改善と保守を提供',
                  icon: '🎯',
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {process.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{process.title}</h3>
                            <p className="text-sm text-blue-600 font-semibold">{process.time}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {process.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 === 1 && (
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {process.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{process.title}</h3>
                            <p className="text-sm text-blue-600 font-semibold">{process.time}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            導入事例
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            実際の成果をご確認ください
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: '大手EC企業様',
                challenge: '開発リソース不足で新機能リリースが遅延',
                solution: 'ベトナムチームによる24時間開発体制を構築',
                result: '開発速度2倍、コスト40%削減を実現',
                testimonial: '期待以上のスピードと品質でした。今では欠かせないパートナーです。',
              },
              {
                company: '金融機関様',
                challenge: '問い合わせ対応に月200時間以上を費やしていた',
                solution: 'AIチャットボットを2週間で導入',
                result: '対応時間を70%削減、顧客満足度10%向上',
                testimonial: '導入の速さと効果に驚きました。ROIは6ヶ月で回収できました。',
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{caseStudy.company}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-red-600">課題：</span>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600">解決策：</span>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-green-600">成果：</span>
                    <p className="text-gray-600 font-semibold">{caseStudy.result}</p>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-gray-600 italic">&ldquo;{caseStudy.testimonial}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              全ての導入事例を見る（10件以上）
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

      {/* Testimonials */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            お客様の
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              声
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            実際にご利用いただいたお客様からの評価
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: '株式会社テックイノベーション',
                industry: 'IT・ソフトウェア',
                name: '田中 太郎',
                position: 'CTO',
                comment:
                  'OffshoreFlowのおかげで開発スピードが2倍になりました。日本人PMの存在が大きく、要件の行き違いがありません。品質も国内開発と変わらず、むしろ向上しました。',
                rating: 5,
                image: '🏢',
              },
              {
                company: 'デジタルマーケティング株式会社',
                industry: 'マーケティング',
                name: '佐藤 花子',
                position: 'プロダクトマネージャー',
                comment:
                  'コスト削減だけでなく、提案力の高さに驚きました。私たちが気づかなかった改善点を積極的に提案してくれ、結果的にユーザー満足度が30%向上しました。',
                rating: 5,
                image: '📊',
              },
              {
                company: 'フィンテックスタートアップ',
                industry: '金融',
                name: '鈴木 一郎',
                position: 'CEO',
                comment:
                  'スタートアップには予算の制約がありますが、OffshoreFlowなら高品質な開発を手頃な価格で実現できます。MVP開発が2週間で完了し、すぐに市場検証できました。',
                rating: 5,
                image: '💳',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.company}</h4>
                      <p className="text-sm text-gray-500">{testimonial.industry}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </blockquote>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-800">{testimonial.name}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{testimonial.position}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9/5.0</div>
                <div className="text-sm text-gray-600">平均評価</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">顧客満足度</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">リピート率</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            料金プラン
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            お客様のニーズに合わせた、透明性の高い料金体系
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'スタートアップ',
                price: '月額30万円〜',
                description: 'MVP開発や小規模プロジェクトに最適',
                features: [
                  'エンジニア1名体制',
                  '日本人PMサポート',
                  '週次進捗報告',
                  'コードレビュー込み',
                  '最短2週間でMVP完成',
                ],
                recommended: false,
              },
              {
                name: 'グロース',
                price: '月額80万円〜',
                description: '本格的な開発・運用に対応',
                features: [
                  'エンジニア2-3名体制',
                  '専任日本人PM',
                  '日次進捗報告',
                  'CI/CD環境構築',
                  '24時間サポート対応',
                  '月10時間の追加開発込み',
                ],
                recommended: true,
              },
              {
                name: 'エンタープライズ',
                price: '要相談',
                description: '大規模開発・複数プロジェクト対応',
                features: [
                  'エンジニア5名以上体制',
                  '専任チーム編成',
                  '常駐も可能',
                  'SLA保証あり',
                  'セキュリティ監査対応',
                  'カスタマイズ可能',
                ],
                recommended: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-8 shadow-lg border ${plan.recommended ? 'border-blue-500 border-2' : 'border-gray-100'}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      人気No.1
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</p>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.name === 'エンタープライズ' ? 'お問い合わせ' : 'このプランで始める'}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">💡 初回限定特典</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">PoC開発50%OFF</h4>
                <p className="text-gray-600">
                  通常100万円のPoC開発を50万円でご提供。2週間で動くプロトタイプを納品します。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">初月20%割引</h4>
                <p className="text-gray-600">
                  3ヶ月以上の契約で初月の開発費を20%割引。まずは気軽にお試しください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 bg-gradient-to-br from-gray-50 to-slate-50 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
            よくあるご質問
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            お客様からよくいただく質問にお答えします
          </p>
          <div className="space-y-6">
            {[
              {
                question: '最短でどのくらいで開発を開始できますか？',
                answer:
                  'お問い合わせから最短3営業日で見積もり提出、契約締結後1週間以内に開発を開始できます。緊急案件の場合は48時間以内の対応も可能です。',
              },
              {
                question: 'どのくらいのコスト削減が期待できますか？',
                answer:
                  '日本国内の開発と比較して平均40%のコスト削減を実現しています。例：月額80万円の日本人エンジニア相当の開発を月額48万円で提供。年間で384万円の削減が可能です。',
              },
              {
                question: '品質は本当に保証されますか？',
                answer:
                  '日本人PMが全プロジェクトを管理し、3段階のコードレビューを実施。過去500件以上のプロジェクトでバグ発生率1%未満を維持しています。万が一の不具合は無償で対応します。',
              },
              {
                question: 'コミュニケーションに問題はありませんか？',
                answer:
                  '日本人PMが窓口となり、日本語で全てのやり取りが可能です。開発チームとは英語でコミュニケーションを取り、週次で進捗報告書を日本語で提出します。',
              },
              {
                question: 'セキュリティは大丈夫ですか？',
                answer:
                  'ISO27001認証取得済み。全ての通信はSSL暗号化、開発環境はVPN接続、ソースコードは日本国内のGitサーバーで管理。NDA締結も標準対応しています。',
              },
              {
                question: 'どのような技術スタックに対応していますか？',
                answer:
                  'React、Vue.js、Next.js、Node.js、Python、Java、PHP、Ruby on Rails、AWS、GCP、Azureなど主要な技術に対応。AIやブロックチェーンなど最新技術の開発実績もあります。',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-gray-800 flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-xl">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  <span className="text-blue-600 font-bold">A.</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              その他のFAQを見る
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

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">2週間で成果を実感できます</h2>
              <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
                30分の無料相談で貴社の課題を可視化。
                <br />
                見積もり提出まで最短3日、PoCは2週間でご提供
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                <a
                  href="/download/offshore-guide"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  導入ガイドをダウンロード
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
