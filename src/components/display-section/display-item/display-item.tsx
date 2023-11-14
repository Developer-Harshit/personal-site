import { Slot, component$ } from "@builder.io/qwik";

interface ItemProps {
  title: string,
  desc: string
  alink: string
}


export default component$((props: ItemProps) => {

  return (
    <>
      <li>
        <a href={`/sketches/${props.alink}`}>
          <Slot />
        </a>
        <h3>
          <a href={`/sketches/${props.alink}`}>
            {props.title}
          </a>
        </h3>

        <p>{props.desc}</p>
      </li>
    </>
  );
});
