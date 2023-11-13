import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo";
import HeaderStyles from "./style.css?inline"
import Accordion from "../accordion/accordion";
import AccordionItem from "../accordion/accordion-item/accordion-item";

export default component$(() => {
useStylesScoped$(HeaderStyles)
  const hamVisible = useSignal(true)
  return (
    <header>
        <nav class="flex items-center justify-between p-2">
          
          <Logo/>

          <button  class={`ham ${hamVisible.value && "is-active"}`} onClick$={() => hamVisible.value = !hamVisible.value}>
            <div class="bar"></div>
          </button>
          </nav>
          <aside class={`mobile-nav ${hamVisible.value && "is-active"}`}>
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
