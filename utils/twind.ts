import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent", 
  theme: {
    colors: {
        primary: '#6392E7',
    },
},
};
// Augment the twind module to add addtional completions
declare module 'twind' {
  interface Plugins {
    // forms should have been detected from setup – not need to add it
    // forms: ''

    // We want to add sm and lg modifiers to the form-input
    'form-input':
      | ''    // plain form-input
      | 'sm' // form-input-sm
      | 'lg' // form-input-lg
  }
}

if (IS_BROWSER) setup(config);
