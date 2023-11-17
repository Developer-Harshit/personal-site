import { component$, useStylesScoped$ } from "@builder.io/qwik";
import HeroStyles from "./style.css?inline"
import HeroImage from "~/media/hero-image.jpg?jsx"

import BasicSection from "../basic-section/basic-section";

export default component$(() => {
useStylesScoped$(HeroStyles)

  return (
   <>
   <section id="hero-section">
      <div id='hero-div'>
          <HeroImage id="hero-image"/>
          <BasicSection sectid="aboutme-section" >
            <>
              Loremipsum Dolorsit
            </>
            <p q:slot="content" class="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nemo necessitatibus quis provident modi, exercitationem maxime alias id dolorem reprehenderit cum rem. Repudiandae incidunt ab nemo unde, quaerat itaque cupiditate aliquam temporibus, beatae minima laboriosam voluptates aspernatur error commodi quisquam quas provident doloribus quos, labore voluptate eveniet! Esse optio, assumenda iste labore sint dignissimos. Facere, ipsam blanditiis! Accusamus enim neque adipisci officiis dolores! Praesentium impedit corporis reiciendis dolor nobis ut dolorum quas ex consectetur itaque?
            </p>
          </BasicSection>
      </div>
     
   </section>
   
   </>
  );
});
