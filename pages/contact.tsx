import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                お問い合わせ
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              まずは30分の無料相談から。
              <br />
              貴社の課題をお聞かせください。最適なソリューションをご提案します。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">お電話でのご相談</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">03-1234-5678</p>
              <p className="text-sm text-gray-600">平日 9:00-18:00</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">オンライン相談</h3>
              <p className="text-sm text-gray-600 mb-3">Zoom/Google Meetで対応</p>
              <a
                href="https://calendly.com/offshoreflow"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                日程を予約する
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">メールでのお問い合わせ</h3>
              <p className="text-lg font-semibold text-purple-600 mb-2">info@offshoreflow.jp</p>
              <p className="text-sm text-gray-600">24時間受付</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              お問い合わせフォーム
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="sample@example.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">電話番号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                      プロジェクトタイプ <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="offshore">オフショア開発</option>
                      <option value="ai">AI開発</option>
                      <option value="saas">SaaS開発</option>
                      <option value="cloud">クラウド移行</option>
                      <option value="consulting">技術コンサルティング</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">予算規模</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="under-100">100万円未満</option>
                      <option value="100-300">100-300万円</option>
                      <option value="300-500">300-500万円</option>
                      <option value="500-1000">500-1000万円</option>
                      <option value="over-1000">1000万円以上</option>
                      <option value="undecided">未定</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">希望開始時期</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="">選択してください</option>
                    <option value="asap">できるだけ早く</option>
                    <option value="1month">1ヶ月以内</option>
                    <option value="3months">3ヶ月以内</option>
                    <option value="6months">6ヶ月以内</option>
                    <option value="undecided">未定</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    ご相談内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    rows={6}
                    placeholder="プロジェクトの概要、課題、ご要望などをお聞かせください"
                  ></textarea>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <span className="text-sm text-gray-700">
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                        プライバシーポリシー
                      </Link>
                      に同意の上、送信します。
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? '送信中...' : '無料相談を申し込む'}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  お問い合わせありがとうございます
                </h3>
                <p className="text-gray-600 mb-8">
                  ご入力いただいた内容を確認次第、
                  <br />
                  1営業日以内にご連絡させていただきます。
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  トップページに戻る
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
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            お問い合わせ前のよくある質問
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '相談は本当に無料ですか？',
                a: 'はい、初回30分の相談は完全無料です。貴社の課題をお聞きした上で、最適なソリューションをご提案します。',
              },
              {
                q: '相談後、必ず契約しなければいけませんか？',
                a: 'いいえ、相談後の契約は任意です。じっくりご検討いただき、納得いただいてからご契約ください。',
              },
              {
                q: '見積もりはどのくらいで出ますか？',
                a: '詳細なヒアリング後、通常3営業日以内に見積もりをご提出します。緊急の場合は最短即日対応も可能です。',
              },
              {
                q: 'オンライン相談の準備は必要ですか？',
                a: '特別な準備は不要です。プロジェクトの概要や課題感をお聞かせいただければ、その場で具体的なご提案が可能です。',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-800 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">オフィス情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">東京本社</h3>
                <p className="mb-2">〒106-0032</p>
                <p className="mb-2">東京都港区六本木1-2-3 六本木ビル10F</p>
                <p className="mb-2">TEL: 03-1234-5678</p>
                <p>営業時間: 平日 9:00-18:00</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">ベトナム開発センター</h3>
                <p className="mb-2">123 Nguyen Hue Street, District 1</p>
                <p className="mb-2">Ho Chi Minh City, Vietnam</p>
                <p>開発チーム: 130名</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
