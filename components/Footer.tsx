import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-gray-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
              マイコープ
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              日本品質のオフショア開発で、コスト削減と高品質を両立。
              お客様のアイデアを、私たちの専門チームが現実に変えます。
            </p>
            <div className="flex space-x-4">
              {[
                { icon: '📧', href: 'mailto:contact@mycorp.co.jp', label: 'メール' },
                { icon: '📱', href: 'tel:+81-3-1234-5678', label: '電話' },
                { icon: '🌐', href: '#', label: 'ウェブサイト' },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-slate-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={contact.label}
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: '会社概要' },
                { href: '/services', label: 'サービス' },
                { href: '/projects', label: '実績' },
                { href: '/contact', label: 'お問い合わせ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">サービス</h4>
            <ul className="space-y-2">
              {[
                'Webシステム開発',
                'モバイルアプリ開発',
                'クラウドソリューション',
                'ITコンサルティング',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} マイコープ株式会社. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
