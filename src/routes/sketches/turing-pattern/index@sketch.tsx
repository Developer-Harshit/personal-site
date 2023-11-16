import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import P5card from "~/components/p5card/p5card";



export default component$(() => {
  return (
    <>
    <P5card>
      <span q: slot = "links">
      
      <script src="/js/TuringPattern.js"></script>
      </span>
    </P5card>
    
    </>
  )
});

export const head: DocumentHead = {
  title: "Turing Pattern",
  meta: [
    {
      name: "Turing Pattern",
      content: "Turing Pattern simulation made using reaction-diffusion equations",
    },
  ],
};