import React from "react";
import Body from "../components/body.tsx";

function NotFound() {
  const title = "404";
  const body = `The page you're looking for doesn't exist!
`;

  return (
    <div>
      <Body title={title} content={body} />
    </div>
  );
}

export default NotFound;
