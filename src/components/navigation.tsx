import React from 'react';
import { Outlet, Link } from "react-router-dom";

interface Page {
  name: string;
  location: string;
  subpages?: Page[];
}

class PageClass implements Page {
  name: string;
  location: string;
  subpages: PageClass[];

  constructor(name: string, location: string, subpages: PageClass[] = []) {
    this.name = name;
    this.location = location;
    this.subpages = subpages.slice();
  }

  print(prefix: string = "", last: boolean = true) {
    var output: string = prefix;

    if (prefix !== "") {
      output += last ? "└─ " : "├─ ";
    }

    output += this.name + "\n";

    const newPrefix = prefix + (last ? " " : "│ ");

    this.subpages.forEach((element, index) => {
      const isLast = index === this.subpages.length - 1;
      output += element.print(newPrefix, isLast);
    });

    return output;
  }

  render(prefix: string = "", last: boolean = true) {
    var output = prefix;

    if (prefix !== "") {
      output += last ? "└─ " : "├─ ";
    }

    output += this.name;

    const newPrefix = prefix + (last ? " " : "| ");

    return (
      <div className='whitespace-pre font-mono' key={this.location}>
        <Link className='hover:text-teal-300' to={this.location}>{output}</Link>
        {
          this.subpages.map((sub, i) => sub.render(newPrefix, i === this.subpages.length - 1))
        }
      </div>
    )
  }
}

const home: PageClass = new PageClass("Home", "/");
const contactme: PageClass = new PageClass("Contact Me", "/contact-me");
const aboutme: PageClass = new PageClass("About Me", "/about-me", [contactme]);
const navigation: PageClass = new PageClass("Navigation", "/", [home, aboutme]);

function Navigation() {
  return (
    <div className='pt-6 pl-3'>
      <ul>{navigation.render()}</ul>
    </div>
  )
}

export default Navigation;
