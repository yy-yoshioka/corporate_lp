import Link from 'next/link';

export default function Services() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h2 className="font-semibold">AI Chat Integration</h2>
          <p className="mb-2">Implement chatbots with AI.</p>
          <Link href="/solutions/ai-chat" className="text-blue-600">
            Details
          </Link>
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-semibold">Offshore Consulting</h2>
          <p className="mb-2">Expert guidance for offshore projects.</p>
          <Link href="/solutions/offshore-dev" className="text-blue-600">
            Details
          </Link>
        </div>
        <div className="border p-4 rounded">
          <h2 className="font-semibold">SaaS Development</h2>
          <p className="mb-2">Full-cycle SaaS product development.</p>
          <Link href="/solutions/saas" className="text-blue-600">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
