import { Slot, component$ } from "@builder.io/qwik";
import Heading from "../heading/heading";

interface SectionProps{
    sectid:string,
    sectclass?:string
    
}

export default component$((props:SectionProps) => {
    return (
        <>
        <section id={props.sectid} class={props.sectclass}>
            <Heading  headid={props.sectid}>
                <Slot />
            </Heading>
            <article >
                <Slot name="content"/>
            </article>
        </section>
        </>
    );
});
