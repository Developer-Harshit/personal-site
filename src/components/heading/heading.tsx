import { Slot, component$ } from "@builder.io/qwik";



export default component$(() => {


  return (
   <>
    <h2  class=" main-heading  font-bold pb-1 pt-1 text-purple-600 ">
       <Slot/>
    </h2>
   
    <div class="line-break"></div>
   </>
  );
});
