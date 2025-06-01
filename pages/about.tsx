export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">会社概要</h1>
      <p>
        日本人PMを中心としたチームで、これまでに50名以上のエンジニアが参画するプロジェクトを多数推進してきました。
      </p>
      <h2 className="text-2xl font-semibold">Company Info</h2>
      <ul className="list-disc list-inside">
        <li>Company Name: MyCorp Inc.</li>
        <li>Founded: 2020</li>
        <li>Capital: 10M JPY</li>
        <li>CEO: Taro Yamada</li>
        <li>Employees: 50+</li>
        <li>Projects per year: 30+</li>
      </ul>
    </div>
  );
}
