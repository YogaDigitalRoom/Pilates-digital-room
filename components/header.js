import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-black py-4 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">
          DIGITAL ROOM
        </div>
        <nav className="space-x-6 text-lg font-normal">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/blog" className="hover:underline">Blogs</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}
