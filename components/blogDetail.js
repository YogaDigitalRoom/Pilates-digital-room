import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetail({ blogs = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog.slug}`}
          key={blog.slug}
          className="bg-white border rounded-lg shadow-sm overflow-hidden group"
        >
          <div className="h-72 w-full overflow-hidden">
            <Image
              src={`/${blog.card}`}
              alt={blog.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-black">{blog.title}</h3>
            <p className="text-black font-semibold mb-4">{blog.date}</p>
            <p className="text-black mb-4">{blog.description}</p>
            <div className="text-primary hover:font-bold font-medium">Leer más</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
