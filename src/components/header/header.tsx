import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo";
import HeaderStyles from "./style.css?inline"
import Accordion from "../accordion/accordion";
import AccordionItem from "../accordion/accordion-item/accordion-item";

export default component$(() => {
useStylesScoped$(HeaderStyles)
  const hamVisible = useSignal(false)
  const toggleHam =  $( () => {
    hamVisible.value = !hamVisible.value
    const aForm = document.querySelector(".acc-form") as HTMLFormElement
    aForm.reset()
  })
  return (
    <header class="fixed top-0 left-0 z-10 w-full bg-slate-100" >
        <nav class="flex items-center justify-between p-2">
          
          <Logo/>

          <button  class={`ham ${hamVisible.value && "is-active"}`} onClick$={toggleHam}>
            <div class="bar"></div>
          </button>
          </nav>
          <div class="line-break"></div>
          <aside class={` mobile-nav ${hamVisible.value && "is-active"}`} >
             <Accordion>
              <AccordionItem labeltext="First Item" itemid="first">
                    <p>Hahah</p>
                    <p>Hahah</p>
                    <p>Hahah</p>
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
