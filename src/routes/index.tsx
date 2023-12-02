import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import IndexStyles from "./style.css?inline";

export default component$(() => {
  useStyles$(IndexStyles);

  return <>hi</>;
});

export const head: DocumentHead = {
  title: "Developer Harshit",
  meta: [
    {
      name: "description",
      content: "aaa",
    },
  ],
};
