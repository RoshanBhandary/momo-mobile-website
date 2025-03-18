import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Menu() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
        <p className="mt-2 text-gray-600">Check out our delicious momos!</p>
      </div>
    </div>
  );
}
