import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo";
import HeaderStyles from "./style.css?inline"

export default component$(() => {
useStylesScoped$(HeaderStyles)
  const hamVisible = useSignal(false)
  return (
    <header>
        <nav>
          
          <Logo/>

          <button  class={`ham ${hamVisible.value && "is-active"}`} onClick$={() => hamVisible.value = !hamVisible.value}>
            <div class="bar"></div>
          </button>
              <aside class={`mobile-nav ${hamVisible.value && "is-active"}`}>
              <ul >
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
                <li><a href="">hi</a></li>
              </ul>
              </aside>
          
        </nav>
    </header>
  );
});
