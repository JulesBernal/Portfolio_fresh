/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer>
        <p>Made with Fresh, Deno, Twind.</p>
        <img
        src="/deno.svg"
        height="100px"
        alt="the logo of deno"
        />
        <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
    </footer>
  );
}
