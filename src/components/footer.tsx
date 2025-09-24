import React from "react";

function Footer() {
  return (
    <div className="bg-floral-white grid grid-cols-3 gap-4 text-taupe-gray border-double border-taupe-gray border-8">
      <div className="">@2025</div>
      <div className="">created by andrew martinez</div>
      <a
        className="underline-offset-1"
        href="https://github.com/martinezjandrew/personal_website"
      >
        <u>source code</u>
      </a>
    </div>
  );
}

export default Footer;
