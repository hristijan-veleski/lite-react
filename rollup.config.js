import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";

import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    external: [
      "react",
      "react-dom",
      "react-transition-group",
      "@types/react-transition-group",
    ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),

      alias({
        entries: [
          { find: /^@\/(.*)$/, replacement: "src/$1" },
          { find: /^@components\/(.*)$/, replacement: "src/components/$1" },
          { find: /^@assets\/(.*)$/, replacement: "src/assets/$1" },
          { find: /^@utils\/(.*)$/, replacement: "src/utils/$1" },
          { find: /^@type-utils\/(.*)$/, replacement: "src/type-utils/$1" },
        ],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/, /\.scss$/],
  },
  {
    input: "src/styles/_styles.scss",
    output: {
      file: "dist/style.css",
      name: "style",
    },
    plugins: [postcss({ extract: true, modules: true })],
  },
];
