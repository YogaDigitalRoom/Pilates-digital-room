import fs from 'fs';
import path from 'path';
import BlogDetail from '@/components/blogDetail';
import Pagination from '@/components/pagination';

export default function Blog() {
  const blogDirectory = path.join(process.cwd(), 'data', 'blogs');
  const fileNames = fs.readdirSync(blogDirectory);
  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      <h1 className="text-3xl font-semibold text-center mb-10">Últimos artículos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {blogs.map((blog, index) => (
          <BlogDetail key={index} blog={blog} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
