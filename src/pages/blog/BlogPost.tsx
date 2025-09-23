import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../postsLoader";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h1>POST NOT FOUND</h1>;

  return (
    <article className="p-6 min-w-full">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
