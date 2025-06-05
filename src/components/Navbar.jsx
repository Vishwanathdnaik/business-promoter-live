// src/components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow">
      <h1 className="font-bold text-lg">Business Promoter</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-pink-400">Home</Link>
        <Link href="#services" className="hover:text-pink-400">Services</Link>
        <Link href="mailto:writetous@businesspromoter.co.in" className="hover:text-pink-400">Contact</Link>
      </div>
    </nav>
  );
}
