import React from "react";
import Body from "../../components/body.tsx";
import todo from "../../../todo.md";

function Todo() {
  return (
    <div>
      <Body content={todo} />
    </div>
  );
}

export default Todo;
