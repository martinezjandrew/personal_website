import React from "react";
import Body from "../../components/body.tsx";

function Log() {
  const title = "Log";
  const body =
    "View changelog for the history of changes to this website or view the to do list to see what I have planned!";

  return (
    <div>
      <Body title={title} content={body} />
    </div>
  );
}

export default Log;
