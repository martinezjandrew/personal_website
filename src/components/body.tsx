import React from "react";
import Markdown from "react-markdown";

interface BodyProps {
  title: string;
  body: string;
}

const Body: React.FC<BodyProps> = ({ title, body }) => {
  return (
    <div className="p-6 min-w-full">
      <h1>{title}</h1>
      <Markdown>{body}</Markdown>
    </div>
  );
};

export default Body;
