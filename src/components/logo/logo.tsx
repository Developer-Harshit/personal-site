import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Styles from "./style.css?inline";
export default component$(() => {
  useStyles$(Styles);
  return (
    <Link href="/" class="logo">
      harshit
    </Link>
  );
});
