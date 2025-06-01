import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                OffshoreFlow
              </span>
              について
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              日本品質とグローバルな開発力を融合し、
              <br />
              500社以上の企業様の成長を支援してきました
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl mb-6">
                🎯
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">ミッション</h2>
              <p className="text-gray-600 leading-relaxed">
                「開発コストの最適化」と「品質の最大化」を両立し、日本企業のグローバル競争力を技術で支援する。24時間リレー開発により、スピードとコストの革新を実現します。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mb-6">
                🚀
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">ビジョン</h2>
              <p className="text-gray-600 leading-relaxed">
                2030年までに、日本とアジアを繋ぐ最大のオフショア開発プラットフォームとなり、1,000社の企業様に年間1,000億円のコスト削減価値を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            数字で見る
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              OffshoreFlow
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2020年', label: '創業', icon: '🏢' },
              { number: '500+', label: '累計プロジェクト数', icon: '📊' },
              { number: '150名', label: '開発チーム規模', icon: '👥' },
              { number: '95%', label: '顧客満足度', icon: '⭐' },
              { number: '40%', label: '平均コスト削減率', icon: '💰' },
              { number: '24時間', label: 'サポート体制', icon: '🕐' },
              { number: '3拠点', label: '開発拠点数', icon: '🌏' },
              { number: '10億円', label: '累計コスト削減額', icon: '💎' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">私たちの強み</h2>
          <div className="space-y-8">
            {[
              {
                title: '日本人PMによる品質管理',
                description:
                  '全プロジェクトに日本人PMを配置。要件定義から納品まで、日本語でのコミュニケーションを保証。週次の進捗報告と日次のSlack連携により、透明性の高いプロジェクト管理を実現。',
                metrics: 'PMの平均経験年数：8年以上',
              },
              {
                title: '厳選されたベトナム開発チーム',
                description:
                  'ベトナムトップ大学出身のエンジニアを採用。採用率わずか3%の厳しい選考を通過した優秀な人材のみで構成。継続的な技術研修により、最新技術にも対応。',
                metrics: 'エンジニア定着率：92%',
              },
              {
                title: '24時間リレー開発体制',
                description:
                  '日本とベトナムの時差を活用した効率的な開発体制。日本の営業時間中に要件確認、ベトナムで夜間開発、翌朝には成果物を確認可能。開発スピード2倍を実現。',
                metrics: '平均納期短縮率：50%',
              },
            ].map((strength, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{strength.description}</p>
                  <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {strength.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">経営チーム</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '山田 太郎',
                position: 'CEO',
                bio: '外資系コンサルティングファーム出身。オフショア開発で10年以上の経験。累計100社以上の企業様の開発効率化を支援。',
                image: '👨‍💼',
              },
              {
                name: 'Nguyen Van A',
                position: 'CTO',
                bio: 'ベトナム国家大学卒、元Google Vietnam勤務。15年以上の開発経験を持ち、技術チームを統括。',
                image: '👨‍💻',
              },
              {
                name: '佐藤 花子',
                position: 'CPO',
                bio: '大手SIer出身のプロダクトマネージャー。アジャイル開発のエキスパートとして、品質管理プロセスを確立。',
                image: '👩‍💼',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">会社概要</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 text-gray-600 font-semibold w-1/3">会社名</td>
                  <td className="py-4 text-gray-800">OffshoreFlow株式会社</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">設立</td>
                  <td className="py-4 text-gray-800">2020年4月1日</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">資本金</td>
                  <td className="py-4 text-gray-800">5,000万円</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">代表取締役</td>
                  <td className="py-4 text-gray-800">山田 太郎</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">従業員数</td>
                  <td className="py-4 text-gray-800">150名（日本：20名、ベトナム：130名）</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">事業内容</td>
                  <td className="py-4 text-gray-800">
                    オフショア開発サービス、AIソリューション開発、クラウド移行支援、技術コンサルティング
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">所在地</td>
                  <td className="py-4 text-gray-800">
                    <div className="space-y-2">
                      <div>
                        <strong>東京本社：</strong>東京都港区六本木1-2-3 六本木ビル10F
                      </div>
                      <div>
                        <strong>ベトナム開発センター：</strong>Ho Chi Minh City, District 1
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">取引銀行</td>
                  <td className="py-4 text-gray-800">三菱UFJ銀行、みずほ銀行</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600 font-semibold">認証・資格</td>
                  <td className="py-4 text-gray-800">
                    ISO27001（情報セキュリティ）、ISO9001（品質管理）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">受賞・認定</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2023',
                title: 'ベストオフショア開発企業賞',
                organization: 'アジアITビジネス協会',
                icon: '🏆',
              },
              {
                year: '2022',
                title: '働きがいのある会社 TOP100',
                organization: 'Great Place to Work®',
                icon: '🎖️',
              },
              {
                year: '2021',
                title: 'DX推進優良企業',
                organization: '経済産業省',
                icon: '🏅',
              },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <div className="text-sm text-gray-500 mb-2">{award.year}年</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">一緒に成功を創りましょう</h2>
            <p className="text-xl mb-8 text-blue-50">
              500社以上の実績と経験を活かし、
              <br />
              貴社の開発課題を解決します
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
