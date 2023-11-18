import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import Styles from "./style.css?inline"

interface HeadingProps{
  headid:string
}

export default component$((props:HeadingProps) => {

  useStylesScoped$(Styles)
  return (
   <>
   
    <h2 class="main-heading ">
      <a class="nav-tag" href={`#${props.headid}`}>#</a>   
      <span>
       <Slot/>
       </span>
    </h2>
   
    <div class="line-break"></div>
   </>
  );
});
