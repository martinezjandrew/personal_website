import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import ViteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: "md-loader",
      transform(code, id) {
        if (id.slice(-3) == ".md") {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
    ViteYaml(),
  ],
});
