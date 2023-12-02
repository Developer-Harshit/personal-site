import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "~/components/card/card";
import projectData from "~/assets/projects-data"
import IndexStyles from "./style.css?inline";

export default component$(() => {
  useStyles$(IndexStyles);

  return (
      <>
       <Card items={projectData} cid="project"></Card>
      </>
  );
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
