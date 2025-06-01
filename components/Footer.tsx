export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto p-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MyCorp. All rights reserved.
      </div>
    </footer>
  );
}
