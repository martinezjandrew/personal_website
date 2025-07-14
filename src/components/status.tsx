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
    <div className="grid grid-cols-2 gap-4 mt-10 items-end">
      <div className="p-4 border-3 rounded-xl relative w-fit mr-10 bg-floral-white border-taupe-gray col-span-2">
        <p className="text-taupe-gray text-sm">{post?.text}</p>
        <div className="text-xs">
          <a href="https://bsky.app/profile/neatbee.bsky.social">
            @{post?.handle}
          </a>
          <p className="text-sm">{post?.getDate()}</p>
        </div>
        <div
          className="w-0 h-0 rounded-md 
          border-l-[20px] border-r-[20px] border-t-[40px] 
          absolute bottom-[-40px] right-10 
          border-l-transparent border-r-transparent border-taupe-gray"
        />
        <div
          className="w-0 h-0
          border-floral-white
          border-l-[15px] border-r-[15px] border-t-[35px] 
          absolute bottom-[-30px] right-11
          border-l-transparent border-r-transparent "
        />
      </div>
      <div />
      <img
        className="h-auto max-w-[90px] rounded-full justify-end border-4 border-taupe-gray"
        src="/avatar.gif"
        alt="Andrew's Avatar"
      />
    </div>
  );
}

export default Status;
