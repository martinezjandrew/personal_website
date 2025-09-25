import React from "react";
import Body from "../components/body.tsx";

function Home() {
  const title = "Welcome";
  const body = `Hey there!

My name is **Andrew Martinez** and welcome to my website!

Here you can learn more about me, see what I've worked on, and you can even read my blog.

Hope you have fun and feel free to reach out to me!

Thanks, Andrew.

## Contact Me
- [LinkedIn](https://www.linkedin.com/in/andrew-joseph-martinez/)
- [martinezjandrew@gmail.com](mailto:martinezjandrew@gmail.com)
`;

  return (
    <div>
      <Body title={title} content={body} />
    </div>
  );
}

export default Home;
