import { Slot, component$, useStyles$} from "@builder.io/qwik";

import CardStyles from "./style.css?inline"

export default component$(() => {
  useStyles$(CardStyles)
  
  return (
    <>
    <script src="/js/libraries/p5.js"></script>
   
   
    <div  id="sketch-container"  class="absolute top-0 left-0 z-[-100]">
      
    </div>
    <div id="control-container"></div>
    <Slot name="links"/>
    </>
    
  );
});
