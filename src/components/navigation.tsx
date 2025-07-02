import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Page {
  name: string;
  location: string;
  subpages?: Page[];
}

export class PageClass implements Page {
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
    var id = this.location;

    if (prefix !== "") {
      output += last ? "└─ " : "├─ ";
    }

    output += this.name;

    const newPrefix = prefix + (last ? " " : "| ");

    function handleClick() {
      addPointer(id);
    }

    return (
      <div className="whitespace-pre font-cascadia-code" key={this.location}>
        <Link
          className="hover:text-teal-300"
          to={this.location}
          onClick={handleClick}
        >
          <div id={this.location} className="navigation flex flex-row">
            {output}
          </div>
        </Link>
        {this.subpages.map((sub, i) =>
          sub.render(newPrefix, i === this.subpages.length - 1),
        )}
      </div>
    );
  }
}

function addPointer(id: string) {
  const line = document.getElementById(id);

  if (line) {
    const oldPointer = document.getElementById("pointer");
    oldPointer?.remove();
    const pointer = document.createElement("div");
    pointer.innerHTML = "⟵";
    pointer.id = "pointer";
    line.insertAdjacentElement("beforeend", pointer);
  }
}

interface NavigationProps {
  page: PageClass;
}

const Navigation: React.FC<NavigationProps> = ({ page }) => {
  useEffect(() => {
    const id = window.location.pathname;
    addPointer(id);
  });
  return (
    <div className="flex max-h-fit min-w-full p-3 bg-floral-white border-taupe-gray border-8 text-taupe-gray border-double items-end">
      <ul>{page.render()}</ul>
    </div>
  );
};

export default Navigation;
