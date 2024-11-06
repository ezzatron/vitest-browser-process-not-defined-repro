import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      name: "chromium",
    },
  },
});
