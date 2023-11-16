import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import P5card from "~/components/p5card/p5card";



export default component$(() => {
  return (
    <>
    <P5card>
      <span q: slot = "links">
      
      <script src="/js/MouseFollow.js"></script>
      </span>
    </P5card>
    
    </>
  )
});

export const head: DocumentHead = {
  title: "Mouse Follow",
  meta: [
    {
      name: "Mouse Follow",
      content: "decaying line that follows mouse position",
    },
  ],
};