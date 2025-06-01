export default function Contact() {
  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">無料相談フォーム</h1>
      <p className="text-gray-600">送信後、2営業日以内に担当者よりご連絡します。</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Company</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border p-2 rounded" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          相談を予約
        </button>
      </form>
    </div>
  );
}
