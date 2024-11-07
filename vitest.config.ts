import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "process.env": JSON.stringify({}),
  },
  test: {
    watch: false,
  },
});
