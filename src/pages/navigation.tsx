import React from "react";
import Body from "../components/body.tsx";

function NavigationPage() {
  const title = "Navigation";
  const body = `Sorry, this isn't a page!
`;

  return (
    <div>
      <h1>Bee Navigation</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/kh2ND3Ok_Bc?si=iMPavwAg6KEz2PSw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="pb-4"
      ></iframe>
    </div>
  );
}

export default NavigationPage;
