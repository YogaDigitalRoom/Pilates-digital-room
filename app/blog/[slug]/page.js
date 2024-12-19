import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), 'data/Blogs');
  const filenames = fs.readdirSync(blogsDirectory);

  // Generate all slugs from JSON filenames
  return filenames.map((filename) => ({
    slug: filename.replace('.json', ''), // Remove `.json` extension
  }));
}

export default async function BlogPost({ params }) {
  // Wait for params to be resolved
  const { slug } = await params;

  const blogsDirectory = path.join(process.cwd(), 'data/Blogs');
  const filePath = path.join(blogsDirectory, `${slug}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const blog = JSON.parse(fileContents);

    return (
      <>
        {/* Head Section for Dynamic Meta Tags */}
        <Head>
          <title>{blog.title}</title>
          <meta name="description" content={blog.description || 'Default blog description'} />
        </Head>

        <article>
          <h1>{blog.title || 'Untitled Blog Post'}</h1>
          <section>
            {blog.content &&
              blog.content.map((item, index) => (
                <div key={index} style={{ marginBottom: '2rem' }}>
                  {item.heading && <h2>{item.heading}</h2>}
                  {item.image && (
                    <img
                      src={`/images/${item.image}`}
                      alt={item.heading || 'Image'}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  {item.subText && <p style={{ fontStyle: 'italic' }}>{item.subText}</p>}
                  {item.text && <p>{item.text}</p>}
                </div>
              ))}
          </section>
        </article>
      </>
    );
  } catch (error) {
    console.error(`Error loading blog post: ${slug}`, error);
    return <p>Blog post not found.</p>;
  }
}