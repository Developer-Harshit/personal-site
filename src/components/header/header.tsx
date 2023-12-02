import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../logo/logo";
import { Link } from "@builder.io/qwik-city";
import Styles from "./style.css?inline";

export default component$(() => {
  useStylesScoped$(Styles);
  return (
    <>
      <header>
        <Logo />
        <nav>
          <Link href="/" class="link">
            blogs
          </Link>
          <Link href="/" class="link">
            about.me
          </Link>
        </nav>
      </header>
    </>
  );
});
