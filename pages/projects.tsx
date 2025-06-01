import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      category: 'ecommerce',
      client: '大手アパレルECサイト',
      title: 'ECプラットフォーム刷新',
      period: '2023年4月〜9月',
      team: 'PM1名、エンジニア8名',
      technologies: ['Next.js', 'Node.js', 'AWS', 'Stripe'],
      challenge: 'レガシーシステムからの移行、パフォーマンス改善、決済システム統合',
      solution: 'マイクロサービス化、CDN活用、段階的移行戦略の採用',
      results: [
        'ページ表示速度70%改善',
        'コンバージョン率25%向上',
        '月間売上30%増加',
        '開発・運用コスト40%削減',
      ],
      testimonial:
        '期待を大きく超える成果でした。特に移行期間中もダウンタイムゼロで完遂できたことに感謝しています。',
      image: '🛍️',
    },
    {
      id: 2,
      category: 'ai',
      client: '地方銀行',
      title: 'AIチャットボット導入',
      period: '2023年7月〜8月',
      team: 'PM1名、エンジニア3名',
      technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL'],
      challenge: '24時間対応の問い合わせ窓口構築、金融用語への対応',
      solution: 'GPT-4のファインチューニング、行内データベース連携',
      results: [
        '問い合わせ対応時間70%削減',
        'オペレーター負担60%軽減',
        '顧客満足度スコア4.2→4.7',
        '年間2,400万円のコスト削減',
      ],
      testimonial: 'わずか2ヶ月でここまでの品質のシステムが完成するとは思いませんでした。',
      image: '🏦',
    },
    {
      id: 3,
      category: 'saas',
      client: 'HRテックスタートアップ',
      title: '採用管理SaaS開発',
      period: '2023年5月〜継続中',
      team: 'PM1名、エンジニア5名',
      technologies: ['Vue.js', 'Ruby on Rails', 'GCP', 'Elasticsearch'],
      challenge: 'MVP開発から本格サービス化まで一貫支援',
      solution: 'アジャイル開発、継続的なユーザーフィードバック反映',
      results: ['2週間でMVPリリース', '3ヶ月で100社導入', 'MRR300万円達成', 'チャーンレート3%未満'],
      testimonial: 'OffshoreFlowのおかげで、資金調達前に収益化できました。',
      image: '💼',
    },
    {
      id: 4,
      category: 'cloud',
      client: '製造業大手',
      title: 'クラウド移行プロジェクト',
      period: '2023年1月〜6月',
      team: 'PM2名、エンジニア10名',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      challenge: 'オンプレミス20システムのクラウド移行',
      solution: 'リフト&シフト戦略、段階的なモダナイゼーション',
      results: [
        'インフラコスト45%削減',
        '可用性99.9%達成',
        'デプロイ時間90%短縮',
        '年間7,200万円の削減',
      ],
      testimonial: '移行の専門性と実行力に驚きました。社内では5年かかると言われていた案件でした。',
      image: '🏭',
    },
    {
      id: 5,
      category: 'mobile',
      client: 'フィットネスチェーン',
      title: 'モバイルアプリ開発',
      period: '2023年8月〜10月',
      team: 'PM1名、エンジニア4名',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
      challenge: 'iOS/Android同時開発、決済機能、予約システム統合',
      solution: 'React Nativeによるクロスプラットフォーム開発',
      results: [
        'ダウンロード数10万突破',
        'アプリ評価4.8/5.0',
        '予約率35%向上',
        '月間アクティブユーザー8万人',
      ],
      testimonial: '開発スピードと品質の両立に感動しました。競合他社に大きく差をつけられました。',
      image: '💪',
    },
    {
      id: 6,
      category: 'blockchain',
      client: '不動産テック企業',
      title: 'ブロックチェーン証明書システム',
      period: '2023年9月〜11月',
      team: 'PM1名、エンジニア3名',
      technologies: ['Ethereum', 'Solidity', 'Next.js', 'IPFS'],
      challenge: '不動産取引の透明性向上、改ざん防止',
      solution: 'スマートコントラクトによる自動化',
      results: ['取引時間80%短縮', '書類管理コスト90%削減', '信頼性スコア向上', '業界初の実装事例'],
      testimonial: '最新技術への対応力と実装スピードは圧巻でした。',
      image: '🏠',
    },
  ];

  const categories = [
    { id: 'all', label: 'すべて', count: projects.length },
    { id: 'ecommerce', label: 'EC・小売', count: 1 },
    { id: 'ai', label: 'AI・機械学習', count: 1 },
    { id: 'saas', label: 'SaaS', count: 1 },
    { id: 'cloud', label: 'クラウド', count: 1 },
    { id: 'mobile', label: 'モバイル', count: 1 },
    { id: 'blockchain', label: 'ブロックチェーン', count: 1 },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                実績紹介
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              500件以上のプロジェクトから厳選した成功事例
              <br />
              具体的な数値と成果でお客様の声をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">完了プロジェクト</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">95%</div>
                <div className="text-gray-600">納期遵守率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">80%</div>
                <div className="text-gray-600">リピート率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">10億円+</div>
                <div className="text-gray-600">累計削減額</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-4">{project.image}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                    <div className="text-sm text-gray-500">{project.period}</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">課題</h4>
                      <p className="text-gray-600 text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">解決策</h4>
                      <p className="text-gray-600 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">成果</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-2">
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
                          <span className="text-sm font-semibold text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-gray-600 italic text-sm mb-3">
                      &ldquo;{project.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{project.team}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">対応業界</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { industry: '金融・保険', count: 85, icon: '💳' },
              { industry: 'EC・小売', count: 120, icon: '🛒' },
              { industry: '製造業', count: 65, icon: '🏭' },
              { industry: 'ヘルスケア', count: 45, icon: '🏥' },
              { industry: '不動産', count: 38, icon: '🏢' },
              { industry: '教育', count: 52, icon: '🎓' },
              { industry: 'エンタメ', count: 43, icon: '🎮' },
              { industry: 'その他', count: 52, icon: '📱' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.industry}</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">{item.count}件</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            プロジェクト成功指標
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-6">
              {[
                { metric: '納期遵守率', value: 95, color: 'blue' },
                { metric: 'バグ発生率', value: 1, inverse: true, color: 'green' },
                { metric: '顧客満足度', value: 98, color: 'purple' },
                { metric: 'コスト削減率', value: 40, color: 'orange' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{item.metric}</span>
                    <span className="text-2xl font-bold text-gray-800">
                      {item.inverse ? `${item.value}%未満` : `${item.value}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}
                      style={{ width: `${item.inverse ? 100 - item.value : item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">貴社も成功事例の仲間入りを</h2>
            <p className="text-xl mb-8 text-blue-50">
              500件以上の実績から、貴社に最適なソリューションをご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                詳細な事例集を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
