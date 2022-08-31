/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Cards() {
  return (
    <section>
        <div
        class={tw `min-h-screen from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br pb-10`}
        >
            <div class={tw `w-full md:w-7/12 pt-5 px-4 mx-auto text-center`}>
                <div class={tw `text-sm text-white py-1`}>
                This components requires
                <a
                    href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
                    class={tw `text-white font-semibold`}
                    target="_blank"
                    >Material Tailwind CSS & JS</a
                >
                for the shadows, ripple effects and card classes. <br /><br />
                A component by<a
                    href="https://www.creative-tim.com?ref=tailwindcomponents"
                    class={tw `text-white font-semibold`}
                    target="_blank"
                >
                    Creative Tim</a
                >.
                </div>
            </div>

            <div
                class={tw `relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16`}
            >
                <div class={tw `card`}>
                    <div class={tw `card-header mx-4 -mt-6`}>
                        <a
                        href="https://www.material-tailwind.com"
                        blur-shadow-image="true"
                        >
                        <img
                            class={tw `w-auto rounded-lg`}
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="tailwind-card-image"
                        />
                        </a>
                    </div>
                    <div class={tw `card-body`}>
                        <a href="#">
                        <h4 class={tw `font-semibold`}>Material Design 3</h4>
                        </a>
                        <p class={tw `opacity-60 mb-4`}>
                        The time is now for it to be okay to be great. People in this
                        world shun people for being great. For being a bright color. For
                        standing out.
                        </p>
                        <button class={tw `button button-pink" data-ripple-light="true"`}>
                        Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
