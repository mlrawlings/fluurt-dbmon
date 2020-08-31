import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/app.js",
  output: {
    // sourcemap: true,
    format: "iife",
    file: "dist/app.js"
  },
  plugins: [
    resolve(),
    production && terser()
  ]
};
