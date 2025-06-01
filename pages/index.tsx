import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gray-100 rounded">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyCorp</h1>
        <p className="mb-6">
          Offshore development with Japanese direction for cost savings and quality.
        </p>
        <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded">
          Contact Us
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Strengths</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="p-4 border rounded">Cost effective</li>
          <li className="p-4 border rounded">High quality</li>
          <li className="p-4 border rounded">Fast delivery</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h3 className="font-bold">Service A</h3>
            <p>Short description</p>
            <Link href="/services" className="text-blue-600">
              Learn more
            </Link>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold">Service B</h3>
            <p>Short description</p>
            <Link href="/services" className="text-blue-600">
              Learn more
            </Link>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold">Service C</h3>
            <p>Short description</p>
            <Link href="/services" className="text-blue-600">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center bg-gray-100 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">Get in touch for consultation and estimation.</p>
        <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
