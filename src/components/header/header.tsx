import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo";
import HeaderStyles from "./style.css?inline"
import HamStyles from "./ham.css?inline"
import Accordion from "../accordion/accordion";
import AccordionItem from "../accordion/accordion-item/accordion-item";

import NavItem from "./nav-item/nav-item";


export default component$(() => {
useStylesScoped$(HeaderStyles)
useStylesScoped$(HamStyles)
  const hamVisible = useSignal(false)
  const toggleHam =  $( () => {
    hamVisible.value = !hamVisible.value
    const aForm = document.querySelector(".acc-form") as HTMLFormElement
    aForm.reset()
  })
  return (
    <header class="fixed top-0 left-0 z-10 w-full " >
        <nav class="flex items-center justify-between ">
          
          <Logo/>
          
          <svg  class={`ham ${hamVisible.value && "active"}`} onClick$={toggleHam}  viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
          <path class="line top" d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
    <path class="line middle" d="m 70,50 h -40" />
    <path class="line bottom"
        d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
 </svg>


        
          </nav>
         
          <aside class={` mobile-aside ${hamVisible.value && "is-active"}`} >
             <Accordion>
              <AccordionItem labeltext="Sketches" itemid="sketches">
              <NavItem sname = "demo">Demo</NavItem>
              </AccordionItem>
              <AccordionItem labeltext="Second Item" itemid="second">
              <NavItem sname = "demo">Demo</NavItem>
              <NavItem sname = "demo">Demo</NavItem>
              <NavItem sname = "demo">Demo</NavItem>
              </AccordionItem>
              <AccordionItem labeltext="Third Item" itemid="third">
              <NavItem sname = "demo">Demo</NavItem>
              <NavItem sname = "demo">Demo</NavItem>
              <NavItem sname = "demo">Demo</NavItem>
              </AccordionItem>

             </Accordion>
          </aside>
    </header>
  );
});
