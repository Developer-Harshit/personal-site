import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo";
import HeaderStyles from "./style.css?inline"

export default component$(() => {
useStylesScoped$(HeaderStyles)
  const hamVisible = useSignal(false)
  return (
    <header>
        <nav class="flex items-center justify-between p-2">
          
          <Logo/>

          <button  class={`ham ${hamVisible.value && "is-active"}`} onClick$={() => hamVisible.value = !hamVisible.value}>
            <div class="bar"></div>
          </button>
          </nav>
          <aside class={`mobile-nav ${hamVisible.value && "is-active"}`}>
              <ul >
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
              </ul>
          </aside>
          
        
    </header>
  );
});
