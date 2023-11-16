import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DisplayItem from "~/components/display-section/display-item/display-item";
import DisplaySection from "~/components/display-section/display-section";
import Hero from "~/components/hero/hero";

import Thumb1 from "~/media/thumbnail/thumb1.jpg?jsx"
import Thumb2 from "~/media/thumbnail/thumb2.jpg?jsx"
import Thumb3 from "~/media/thumbnail/thumb3.jpg?jsx"
import Thumb4 from "~/media/thumbnail/thumb4.jpg?jsx"

export default component$(() => {

  return (
    <>
      <Hero />
      <DisplaySection>
        <span q: slot="title">Sketches</span>
        <>
          <DisplayItem
            title="Mouse follow"
            desc="Decaying line that follows mouse position"
            alink="mouse-follow">
            <Thumb1></Thumb1>
          </DisplayItem>
          <DisplayItem
            title="Turing Pattern"
            desc="This simulation made using reaction-diffusion equations"
            alink="turing-pattern">
            <Thumb2></Thumb2>
          </DisplayItem>
          <DisplayItem
            title="Demo Sketch"
            desc="This is an demo sketch to test the features of this site."
            alink="demo">
            <Thumb3></Thumb3>
          </DisplayItem>
          <DisplayItem
            title="Demo Sketch"
            desc="This is an demo sketch to test the features of this site."
            alink="demo">
            <Thumb4></Thumb4>
          </DisplayItem>

        </>
      </DisplaySection>

    </>
  );
});

export const head: DocumentHead = {
  title: "Developer Harshit",
  meta: [
    {
      name: "description",
      content: "aaa",
    },
  ],
};
