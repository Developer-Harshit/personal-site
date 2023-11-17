import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo";
import HeaderStyles from "./style.css?inline"
import HamStyles from "./ham.css?inline"
import Accordion from "../accordion/accordion";
import AccordionItem from "../accordion/accordion-item/accordion-item";

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
    <header class="fixed top-0 left-0 z-10 w-full bg-slate-100" >
        <nav class="flex items-center justify-between ">
          <a href="/">
          <Logo/>
          </a>
          <svg  class={`ham hamRotate ham7 ${hamVisible.value && "active"}`} onClick$={toggleHam}  viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
          <path class="line top" d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
    <path class="line middle" d="m 70,50 h -40" />
    <path class="line bottom"
        d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
 </svg>


          {/* <button  class={`ham ${hamVisible.value && "is-active"}`} onClick$={toggleHam}>
            <div class="bar"></div>
          </button> */}
          </nav>
         
          <aside class={` mobile-nav ${hamVisible.value && "is-active"}`} >
             <Accordion>
              <AccordionItem labeltext="Sketches" itemid="sketches">
                   <a href="/sketches/demo">Demo</a>
              </AccordionItem>
              <AccordionItem labeltext="Second Item" itemid="second">
              <p>Hahah</p>
                    <p>Hahah</p>
                    <p>Hahah</p>
              </AccordionItem>
              <AccordionItem labeltext="Third Item" itemid="third">
                    <p>Hahah</p>
                    <p>Hahah</p>
                    <p>Hahah</p>
              </AccordionItem>

             </Accordion>
          </aside>
    </header>
  );
});
