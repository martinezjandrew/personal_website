import React from "react";
import Body from "../../components/body.tsx";
import changelog from "../../../changelog.md";

function Changelog() {
  return (
    <div>
      <Body content={changelog} />
    </div>
  );
}

export default Changelog;
