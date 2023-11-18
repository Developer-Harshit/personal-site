import { Slot, component$ } from "@builder.io/qwik";

import CodeIcon from "~/media/social/code.png?jsx"
interface ItemProps {
    sname:string 

}


export default component$((props: ItemProps) => {
  

  return (
    <a href={`/sketches/${props.sname}`} class="flex justify-center items-center gap-[var(--sep-small)]">
    <CodeIcon class="w-[var(--size-normal)] h-[var(--size-normal)]"></CodeIcon>
    <Slot/>
  </a>
  );
});
