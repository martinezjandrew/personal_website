import matter from "gray-matter";
import { Buffer } from "buffer";

if (!(globalThis as any).Buffer) {
  (globalThis as any).Buffer = Buffer;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const posts: Post[] = Object.entries(
  import.meta.glob("./pages/blog/posts/*.md", { eager: true, as: "raw" }),
).map(([_path, raw]): Post => {
  const { data, content } = matter(raw as string);

  const post: Post = {
    slug: data.slug,
    title: data.title,
    date: data.date,
    content: content,
  };

  return post;
});
