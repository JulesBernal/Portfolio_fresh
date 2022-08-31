/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Game {
    string: string;
  }
  
  export const handler: Handlers<Game | null> = {
    async GET(_, ctx) {
      const resp = await fetch(`https://fishing-game-api.herokuapp.com/`);
      if (resp.status === 404) {
        return ctx.render(null);
      }
      const fishGame: Game = await resp.json();
      return ctx.render(fishGame);
    },
  }; 

export function Something({data}: PageProps< Game | null>) {
    if (!data) {
        return <h1>Game not found</h1>;
      }
  return (
    <div>
        <p>{data}</p>
    </div>
  );
}
