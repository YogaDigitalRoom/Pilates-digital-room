import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function BlogPage() {
  // Function to fetch blog data
  const fetchBlogs = () => {
    const blogsDirectory = path.join(process.cwd(), 'data/Blogs');
    const filenames = fs.readdirSync(blogsDirectory);

    // Read each file and parse its content
    const blogs = filenames.map((filename) => {
      const filePath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const blog = JSON.parse(fileContents);

      // Generate slug if not included in the JSON
      if (!blog.slug) {
        blog.slug = filename.replace('.json', '');
      }

      return blog;
    });

    return blogs;
  };

  const blogs = fetchBlogs();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
