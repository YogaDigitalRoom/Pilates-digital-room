import fs from 'fs';
import path from 'path';
import BlogDetail from '@/components/blogDetail';
import Layout from '@/app/layout'; // Asegúrate de que este path es correcto

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), 'data', 'blogs');
  const fileNames = fs.readdirSync(blogDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const blog = JSON.parse(fileContents);
    return { ...blog, slug: fileName.replace(/\.json$/, '') };
  });

  return {
    props: {
      blogs,
    },
  };
}

export default function BlogPage({ blogs }) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Últimos artículos</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogDetail key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
