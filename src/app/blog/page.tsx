import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function Blog() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ""),
      data,
      content,
    };
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{post.data.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.data.date}
            </p>
            <div className="prose dark:prose-invert">
              <MDXRemote source={post.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
