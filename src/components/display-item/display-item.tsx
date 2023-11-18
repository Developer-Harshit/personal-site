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
        <Slot />
        <div class="content">
          <p >{props.desc}</p>
          <div>
            <div class="line-break"></div>
            <a href={`/sketches/${props.alink}`}>
              <h3 >
                {props.title}
              </h3>
            </a>
          </div>
        </div>
      </li>
    </>
  );
});
