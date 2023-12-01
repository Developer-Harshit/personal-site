import { component$,  useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import threeSketch from "./main";



export default component$(() => {

    useVisibleTask$( () => {
        threeSketch()
    })
  return (
    <>
      <div id="sketch" class="fixed">
        
      </div>
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