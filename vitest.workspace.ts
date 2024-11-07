import react from "@vitejs/plugin-react";
import { defineProject, defineWorkspace } from "vitest/config";

export default defineWorkspace([
  defineProject({
    plugins: [react()],
    define: {
      "process.env": JSON.stringify({}),
    },
    test: {
      name: "project",
      browser: {
        enabled: true,
        headless: true,
        provider: "playwright",
        name: "chromium",
      },
    },
  }),
]);
