import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">MOMO Mobile</h1>
        <div className="space-x-6">
          <Link href="/"><a className="text-gray-600 hover:text-gray-900">Home</a></Link>
          <Link href="/menu"><a className="text-gray-600 hover:text-gray-900">Menu</a></Link>
          <Link href="/contact"><a className="text-gray-600 hover:text-gray-900">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
