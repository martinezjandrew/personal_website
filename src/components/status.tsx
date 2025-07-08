import React, { useEffect, useState } from "react";

interface Post {
  handle: String;
  avatar: String;
  date: Date;
  text: String;
}

class Post implements Post {
  handle: String = "";
  avatar: String = "";
  date: Date = new Date();
  text: String = "";

  constructor(
    handle: String = "",
    avatar: String = "",
    date: Date = new Date(),
    text: String = "",
  ) {
    this.handle = handle;
    this.avatar = avatar;
    this.date = date;
    this.text = text;
  }

  print() {
    return this.handle + ": '" + this.text + "' on " + this.date;
  }

  getDate() {
    return (
      this.date.getMonth() +
      "/" +
      this.date.getDate() +
      "/" +
      this.date.getFullYear()
    );
  }
}

function Status() {
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    getFeed();
  }, []);
  async function getFeed() {
    const url =
      "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did:plc:ayhvccj4lkqsgsenkp323cvt&limit=1";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      const postData = data.feed[0].post;
      const postInstance = new Post(
        postData.author.handle,
        postData.author.avatar,
        new Date(postData.record.createdAt),
        postData.record.text,
      );
      setPost(postInstance);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <h2>{post?.handle}</h2>
      <img src={post?.avatar} />
      <p>{post?.text}</p>
      <p>{post?.getDate()}</p>
    </div>
  );
}

export default Status;
