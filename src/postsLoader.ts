import matter from "gray-matter";
import { Buffer } from "buffer";

if (!globalThis.Buffer) {
  globalThis.Buffer = Buffer;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const posts: Post[] = Object.entries(
  import.meta.glob("./pages/blog/posts/*.md", { eager: true, as: "raw" }),
).map(([path, raw]): Post => {
  const { data, content } = matter(raw as string);

  const post: Post = {
    slug: data.slug,
    title: data.title,
    date: data.date,
    content: content,
  };

  return post;
});
