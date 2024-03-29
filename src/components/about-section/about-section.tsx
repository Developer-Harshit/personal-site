import { Slot, component$ } from "@builder.io/qwik";
import Heading from "../heading/heading";

interface SectionProps{
    secid:string
}

export default component$((props:SectionProps) => {
    return (
        <>
        <section id={props.secid}>
            <Heading  headid={props.secid}>
                <Slot name="title" />
            </Heading>
            <article >
                <Slot/>
            </article>
        </section>
        </>
    );
});
