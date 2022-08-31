/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { ContactForm } from "../components/ContactForm.tsx";
import { Card } from "../components/Card.tsx";
import {Cards} from "../components/Cards.tsx";
// import {Fish} from "../components/Fish.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
// import Fishing from "../islands/Fishing.tsx"
import { render } from "https://deno.land/x/fresh@1.0.2/src/server/render.tsx";

export const handler: Handlers = {
  async GET(_,ctx) {
    const resp = await fetch(`https://portfoliojb-api.herokuapp.com/`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const project = await resp.json();
    return ctx.render(project);
  },
  async POST(req) {
    const res = await fetch(`https://fishing-game-api.herokuapp.com/`);
    if (res.status === 404) {
      return new Response(null,{status:404});
    }
    const fishGame = await res.json();
    return new Response(JSON.stringify(fishGame));
  },
}; 
export default function Home(project:PageProps) {
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md  bg-blue-600`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      {/* <Counter start={3} /> */}
     
      {/* <Cards />
      <p class={tw`my-6`}>
        
      </p> */}
      <article class={tw`grid grid-cols-2 gap-4`}>
      {project?.data &&(project.data.projects.map((project:any)=>{
        return(
        <Card data={project}/>)
      }))
      }
      </article>

      <ContactForm />
    </main>
  );
}
