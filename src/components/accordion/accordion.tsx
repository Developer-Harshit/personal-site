import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import AccordionStyles from "./style.css?inline"



export default component$(() => {
useStyles$(AccordionStyles)
  return (
    <form class="acc-form" >
    <ul class="accordion">
        <Slot /> 
    </ul>
    </form>
    

  );
});
