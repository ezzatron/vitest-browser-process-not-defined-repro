import Home from "../src/pages/index";
import { beforeEach, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import type { AppProps } from "next/app";
import App from "../src/pages/_app";

beforeEach(() => {
  render(<App {...({} as AppProps)} Component={Home} pageProps={{}} />);
});

it("should pass", () => {
  expect(true).toBe(true);
});
