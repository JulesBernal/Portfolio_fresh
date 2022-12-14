/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { ContactForm } from "../components/ContactForm.tsx";
import { Card } from "../components/Card.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "https://deno.land/x/fresh@1.0.2/src/server/render.tsx";
import {Footer} from  "../components/Footer.tsx"
export const handler: Handlers = {
  async GET(_,ctx) {
    const resp = await fetch(`https://portfolio-api-mocha.vercel.app/`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const project = await resp.json();
    return ctx.render(project);
  },
  //a comment
  async POST(req) {
    const res = await fetch(`https://fishing-game-julesbernal.vercel.app/`);
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
      {/* <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      /> */}
      {/* <Counter start={3} /> */}
     
      {/* <Cards />
      <p class={tw`my-6`}>
        
      </p> */}
      <article>
        <h1 class={tw`text-6xl`}>Jules Bernal Benitez</h1>
      </article>
      <article id='project' class={tw`grid grid-cols-2 gap-4`}>
      {project?.data &&(project.data.projects.map((project:any)=>{
        return(
        <Card data={project}/>)
      }))
      }
      </article>

      <ContactForm />
      <Footer />
    </main>
  );
}
