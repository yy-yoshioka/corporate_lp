import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MyCorp
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Offshore development with Japanese direction for cost savings and quality. Transform
              your ideas into reality with our expert team.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: '📧', href: 'mailto:contact@mycorp.com', label: 'Email' },
                { icon: '📱', href: 'tel:+1234567890', label: 'Phone' },
                { icon: '🌐', href: '#', label: 'Website' },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={contact.label}
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
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
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting'].map(
                (service) => (
                  <li key={service}>
                    <span className="text-gray-300">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MyCorp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
