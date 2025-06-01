export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p>Here are some of our recent works.</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="border p-4 rounded">Project A - E-commerce site</li>
        <li className="border p-4 rounded">Project B - AI Chatbot</li>
        <li className="border p-4 rounded">Project C - Mobile App</li>
      </ul>
    </div>
  );
}
