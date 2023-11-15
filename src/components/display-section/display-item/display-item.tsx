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
          
          <p class="text-sm">{props.desc}</p>
          <div>

          
          <div class="line-break"></div>
          <a href={`/sketches/${props.alink}`}>
          <h3 class="font-semibold text-slate-300">
            
           
              {props.title}
           
            
          
          </h3>
          </a>
          </div>
        </div>



      </li>
    </>
  );
});
