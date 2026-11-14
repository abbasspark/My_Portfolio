import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// The output folder stays "build" so the existing Netlify setup keeps working.
export default defineConfig({
  plugins: [react()],
  build: {outDir: "build"},
  server: {port: 3000}
});
