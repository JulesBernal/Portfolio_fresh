/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import Fishing from "../islands/Fishing.tsx"
interface Project {
    url: string;
    img: string;
    name: string;
    description: string;
    repo_url: string;
  }
  
//   export const handler: Handlers<Project | null> = {
//     async GET(_, ctx) {
//       const { username } = ctx.params;
//       const resp = await fetch(`https://portfoliojb-api.herokuapp.com/`);
//       if (resp.status === 404) {
//         return ctx.render(null);
//       }
//       const projectData: Project = await resp.json();
//       return ctx.render(projectData);
//     },
//   }; 

export function Card(props:PageProps/*{project}: PageProps<Project | null>*/) {
    if (!props.data) {
        return <h1>User not found</h1>;
      }
      const box = (<div><img src={props.data.img}
      class={tw `w-auto rounded-lg`} 
      blur-shadow-image="true" />
  <h1 class={tw `font-semibold`}>{props.data.name}</h1>
  <p class={tw`opacity-60 mb-4`}>{props.data.description}</p> </div>)
  return (
    <div  class={tw ` from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br pb-10`}
    >   
        <div class={tw `relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 h-200`}
        >
            <div class={tw `mx-4 -mt-6 h-96`}>
                {props?.data.url ?(
                    <a href={props.data.url}>
                        {box}
                </a>
                
                ) :  <div>
                <Fishing />
                {box}</div>  }
                
                <a href={props.data.repo}>
                    <img src='/logo-github.svg' width={64} height={64} />
                </a>
            </div>
        </div>
    </div>
  );
}
