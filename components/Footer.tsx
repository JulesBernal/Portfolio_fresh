/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer class={tw`flex flex-col mx-auto items-center`}>
      <section class={tw`flex flex-row mx-auto`}>
        <a href="https://github.com/JulesBernal">
          <img src="/logo-octocat.svg" 
          width={64} height={64}
          alt="linkedin alt logo" />
        </a>
        <a href="https://www.linkedin.com/in/jules-bernal-benitez/">
          <img src="/logo-linkedin.svg" 
          width={64} height={64}
          alt="linkedin logo" />
        </a>
        
      </section>

      <p class={tw`pt-5`}>Made with Fresh, Deno, Tailwind/Twind.</p>
      
      <section class={tw`flex flex-row` }>
        <a href="https://deno.land/">
          <img
          src="/deno.svg"
          width={64} height={64}
          alt="the logo of deno"
          />
        </a>
        <a href="https://fresh.deno.dev/">
          <img
          src="/logo.svg"
          alt="the fresh logo: a sliced lemon dripping with juice"
          width={64} height={64}
          />
        </a>
        <a href="https://tailwindcss.com/">
          <img
          src="/tailwind.svg"
          width={64} height={64}
          alt="the tailwind logo: two wind symbols over top each other"
          />
        </a>
        <a href="https://twind.dev/">
          <img
          src="/twind-logo-animated.svg"
          width={64} height={64}
          alt="the twind logo"
          />
        </a>
      </section>
    </footer>
  );
}
