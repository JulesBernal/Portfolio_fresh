/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return <main>
          <h1>
            404 not found: {url.pathname}
          </h1>
        </main>;
}