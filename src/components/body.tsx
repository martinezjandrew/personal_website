import React from "react";
import Markdown from "react-markdown";

interface BodyProps {
  title?: string;
  content: string;
}

const Body: React.FC<BodyProps> = ({ title, content }) => {
  return (
    <div className="p-6 min-w-full">
      {title && <h1>{title}</h1>}
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default Body;
