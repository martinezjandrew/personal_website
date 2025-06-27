import React from "react";
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

    if (prefix !== "") {
      output += last ? "└─ " : "├─ ";
    }

    output += this.name;

    const newPrefix = prefix + (last ? " " : "| ");

    return (
      <div className="whitespace-pre font-cascadia-code" key={this.location}>
        <Link className="hover:text-teal-300" to={this.location}>
          {output}
        </Link>
        {this.subpages.map((sub, i) =>
          sub.render(newPrefix, i === this.subpages.length - 1),
        )}
      </div>
    );
  }
}

interface NavigationProps {
  page: PageClass;
}

const Navigation: React.FC<NavigationProps> = ({ page }) => {
  return (
    <div className="flex max-h-fit min-w-full p-3 bg-floral-white border-taupe-gray border-8 text-taupe-gray border-double">
      <ul>{page.render()}</ul>
    </div>
  );
};

export default Navigation;
