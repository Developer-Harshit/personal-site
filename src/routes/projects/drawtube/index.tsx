import { component$, useStylesScoped$ } from "@builder.io/qwik";


import Styles from "./style.css?inline";

export default component$(() => {
  useStylesScoped$(Styles);
  return (
        <iframe src="https://drawtube.vercel.app" frameBorder="0"/>
  );
});
