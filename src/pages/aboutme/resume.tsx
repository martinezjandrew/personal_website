import React from "react";

function Resume() {
  return (
    <div className="md w-full h-full">
      <h1>Resume</h1>
      <p>Take a gander at my resume! It's what I send to recruiters.</p>
      <object
        data="https://gfmgwywzylahennclcpq.supabase.co/storage/v1/object/public/upload//martinez-resume.pdf"
        type="application/pdf"
        width="100%"
        height="750px"
        className="border-10 border-double"
      >
        <p>Unable to display PDF file.</p>
      </object>
    </div>
  );
}

export default Resume;
