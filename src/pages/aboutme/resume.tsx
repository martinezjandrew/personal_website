import React from "react";

function Resume() {
  return (
    <div className="md w-full h-full">
      <h1>Resume</h1>
      <p>Take a gander at my resume! It's what I send to recruiters.</p>
      <iframe
        src="/andrew-resume.pdf"
        width="100%"
        height="750px"
        className="border-10 border-double"
      >
        <p>Unable to display PDF file.</p>
      </iframe>
    </div>
  );
}

export default Resume;
