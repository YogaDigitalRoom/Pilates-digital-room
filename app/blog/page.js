import fs from 'fs';
import path from 'path';
import BlogDetail from '@/components/blogDetail';

export const metadata = {
  title: 'Blog | Pilates Digital Room',
  description: 'Artículos para una espalda fuerte y sin dolor',
};

export default async function BlogPage() {
  const blogDirectory = path.join(process.cwd(), 'data', 'blogs');
  const fileNames = fs.readdirSync(blogDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  // 🔁 Ordenar de más reciente a más antiguo
  blogs.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/');
    const [dayB, monthB, yearB] = b.date.split('/');
    const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
    const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
    return dateB - dateA; // 🔁 más reciente primero
  });

  return (
    <main className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Últimos artículos</h1>
      <BlogDetail blogs={blogs} />
    </main>
  );
}
