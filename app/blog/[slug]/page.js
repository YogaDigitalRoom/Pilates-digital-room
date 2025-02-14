import fs from 'fs';
import path from 'path';
import BlogPostClient from '@/components/blogDetail';

export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), 'data/blogs');
  const filenames = fs.readdirSync(blogsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.json', ''), // Remove .json extension
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;

  const blogsDirectory = path.join(process.cwd(), 'data/blogs');
  const filePath = path.join(blogsDirectory, `${slug}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const blog = JSON.parse(fileContents);

    return <BlogPostClient blog={blog} />;
  } catch (error) {
    console.error(`Error loading blog post: ${slug}`, error);
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 text-center">Blog post not found.</p>
      </div>
    );
  }
}
