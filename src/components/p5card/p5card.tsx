import { Slot, component$} from "@builder.io/qwik";



export default component$(() => {

  
  return (
    <>
    <script src="/js/libraries/p5.js" defer></script>
    <script src="/js/libraries/p5Control.js" defer></script>
   
    <div  id="sketch-container"  class="">
      
    </div>
    <div id="control-container" class="">
   
    </div>
    <Slot name="links"/>
    </>
    
  );
});
