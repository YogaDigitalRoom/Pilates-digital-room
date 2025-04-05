import fs from 'fs';
import path from 'path';
import BlogDetail from '@/components/blogDetail';
import Pagination from '@/components/pagination';

export default function BlogPage({ blogs }) {
  return (
    <div className="min-h-screen bg-white text-black py-10 px-4">
      <h1 className="text-3xl font-semibold text-center mb-10">Últimos artículos</h1>
      <BlogDetail blogs={blogs} />
      <Pagination />
    </div>
  );
}

// Esto es lo que carga los datos del JSON del sistema de archivos
export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), 'data', 'blogs');
  const fileNames = fs.readdirSync(blogDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  return {
    props: {
      blogs,
    },
  };
}
