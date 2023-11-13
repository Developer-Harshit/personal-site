import { Slot, component$ } from "@builder.io/qwik";


interface ItemProps {
    labeltext : string,
    itemid : string,

}


export default component$((props: ItemProps) => {


  return (
    <li>
        <input  type="radio" name="accordion" id={props.itemid}   />
        <label for={props.itemid}>{props.labeltext}</label>
        <div class="content">
            <Slot/>
        </div>
    </li>
  );
});
