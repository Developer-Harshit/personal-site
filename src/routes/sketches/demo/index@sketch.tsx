import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import P5card from "~/components/p5card/p5card";



export default component$(() => {
  return (
    <>
    <P5card>
      <span q: slot = "links">
      <script src="/js/sketch.js"></script>
      </span>
    </P5card>
    
    </>
  )
});

export const head: DocumentHead = {
  title: "Sketch Demo",
  meta: [
    {
      name: "demo sketch",
      content: "demo sketch for testing purpose",
    },
  ],
};