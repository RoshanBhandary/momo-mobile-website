import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to MOMO Mobile</h1>
        <p className="mt-4 text-lg text-gray-600">Authentic Nepalese Momos in Denton, TX</p>
      </div>
    </div>
  );
}
