/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer class={tw`flex flex-col mx-auto items-center`}>
      <p>Made with Fresh, Deno, Twind.</p>
      <section class={tw`flex flex-row`}>
        <img
        src="/deno.svg"
        // height="100px"
        width={64} height={64}
        alt="the logo of deno"
        />
        <img
        src="/logo.svg"
        // height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
        width={64} height={64}
        />
        <img
        src="/lemon-squash.svg"
        // height="100px"
        width={64} height={64}
        alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </section>
    </footer>
  );
}
