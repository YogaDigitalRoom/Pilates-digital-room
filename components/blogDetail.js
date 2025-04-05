import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetail({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {blogs.map((blog) => (
        <div key={blog.slug} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={`/img/${blog.card}`}
            alt={blog.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              Leer más →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
