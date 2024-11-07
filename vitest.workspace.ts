import react from "@vitejs/plugin-react";
import {
  defineProject,
  defineWorkspace,
  type UserWorkspaceConfig,
  type WorkspaceProjectConfiguration,
} from "vitest/config";

export default defineWorkspace([
  defineExtends({
    plugins: [react()],
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

function defineExtends(
  config: UserWorkspaceConfig,
): WorkspaceProjectConfiguration {
  return Object.assign(defineProject(config), {
    extends: "./vitest.config.ts",
  });
}
