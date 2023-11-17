import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import IndexStyles from "./style.css?inline"
import DisplayStyles from "~/components/display-item/style.css?inline"

import Thumb1 from "~/media/thumbnail/thumb1.jpg?jsx"
import Thumb2 from "~/media/thumbnail/thumb2.jpg?jsx"
import Thumb3 from "~/media/thumbnail/thumb3.jpg?jsx"
import Thumb4 from "~/media/thumbnail/thumb4.jpg?jsx"

import DisplayItem from "~/components/display-item/display-item";
import BasicSection from "~/components/basic-section/basic-section";
import Hero from "~/components/hero/hero";

export default component$(() => {
  useStyles$(IndexStyles)
  useStyles$(DisplayStyles)
  return (
    <>
      <Hero />
      <BasicSection sectid="aboutsite-section" sectclass="about">
        <>
          About site
        </>
        <p class="about" q: slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nemo necessitatibus quis provident modi, exercitationem maxime alias id dolorem reprehenderit cum rem. Repudiandae incidunt ab nemo unde, quaerat itaque cupiditate aliquam temporibus, beatae minima laboriosam voluptates aspernatur error commodi quisquam quas provident doloribus quos, labore voluptate eveniet! Esse optio, assumenda iste labore sint dignissimos. Facere, ipsam blanditiis! Accusamus enim neque adipisci officiis dolores! Praesentium impedit corporis reiciendis dolor nobis ut dolorum quas ex consectetur itaque?
        </p>
      </BasicSection>


      <BasicSection sectid="sketches-section" sectclass="display-section">
        <>
          Sketches
        </>
        <ul q: slot="content" class="display-ul" >
          <DisplayItem title="Mouse follow" desc="Decaying line that follows mouse position" alink="mouse-follow">
            <Thumb1 />
          </DisplayItem>
          <DisplayItem title="Turing Pattern" desc="This simulation made using reaction-diffusion equations" alink="turing-pattern">
            <Thumb2 />
          </DisplayItem>
          <DisplayItem title="Mouse follow" desc="Decaying line that follows mouse position" alink="mouse-follow">
            <Thumb3 />
          </DisplayItem>
          <DisplayItem title="Turing Pattern" desc="This simulation made using reaction-diffusion equations" alink="turing-pattern">
            <Thumb4 />
          </DisplayItem>
        </ul>
      </BasicSection>


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
