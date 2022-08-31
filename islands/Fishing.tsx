/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import {useState} from "preact/hooks";
// interface Game {
//     // fishyfishyfish: string;
//     name:string;
//   }
  
  // export const handler: Handlers<Game | null> = {
  //   async GET(_, ctx) {
  //     const resp = await fetch(`https://api.github.com/users/taigatop`);
  //     // const resp = await fetch(`https://fishing-game-api.herokuapp.com/`);
  //     if (resp.status === 404) {
  //       return ctx.render(null);
  //     }
  //     const fishGame: Game = await resp.json();
  //     return ctx.render(fishGame);
  //   },
  // }; 

export default function Fishing(/*{data}: PageProps*/) {
  const [fishInfo,setFishInfo]=useState();

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch('/', {
      method:"POST"
    });
    // console.log(await res.json());
    const data = await res.json();
    if(res.ok){
      setFishInfo(data)
    }
  }
    // if (!data) {
    //     return <h1>Game not found</h1>;
    //   }
  return (
    <div>
      <form onSubmit={onSubmit}>
          <button class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`} type="submit">Fish</button>
      </form>

        {fishInfo?.fishyfishyfish && (
        <section class={tw`mt-10 w-full md:w-7/12 pt-5 px-4 mx-auto text-center `}>
          <p class={tw`text-sm text-white py-1`}>{fishInfo.fishyfishyfish}</p>
        </section>
        )} 
    </div> 
  );
}
