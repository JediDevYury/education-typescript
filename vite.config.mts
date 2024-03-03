import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    include: ["src/**/*.ts"],
    setupFiles: [path.resolve(__dirname, "scripts/setup.ts")],
    passWithNoTests: true,
    environment: "jsdom",
  },
  plugins: [react(), tsconfigPaths()],
})
