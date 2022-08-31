/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import {useState} from "preact/hooks";


export default function Fishing() {
  const [fishInfo,setFishInfo]=useState();

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch('/', {
      method:"POST"
    });
    const data = await res.json();
    if(res.ok){
      setFishInfo(data)
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit} class={tw`flex flex-col items-center justify-center`}>
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
