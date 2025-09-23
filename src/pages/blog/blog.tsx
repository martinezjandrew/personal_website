import React from "react";
import { posts } from "../../postsLoader";
import { Link } from "react-router-dom";

function Blog() {
  const title = "Blog";
  const body =
    "Hello there! Welcome to my website, I'm Andrew Martinez. I'm a programmer and a media enthusiest. On this website, you'll find my personal website and other stuff related to my interests. Enjoy!";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 underline"
              >
                {post.title}
              </Link>
              <span className="text-gray-500">({post.date})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
