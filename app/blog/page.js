import fs from "fs";
import path from "path";
import Pagination from "@/components/pagination";

export default function BlogPage() {
  // Fetch data server-side
  const fetchBlogs = () => {
    const blogsDirectory = path.join(process.cwd(), "data/blogs");
    const filenames = fs.readdirSync(blogsDirectory);

    // Read and parse blog data
    const blogs = filenames
      .filter((filename) => filename.endsWith(".json"))
      .map((filename) => {
        const filePath = path.join(blogsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf-8");

        try {
          const blog = JSON.parse(fileContents);
          if (!blog.slug) {
            blog.slug = filename.replace(".json", "");
          }
          return blog;
        } catch (error) {
          console.error(`Error parsing JSON for ${filename}:`, error);
          return null;
        }
      })
      .filter(Boolean); // Remove null values

    return blogs;
  };

  const blogs = fetchBlogs();

  // Pass data to the Pagination component
  return <Pagination blogs={blogs} />;
}
