import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import Styles from "./style.css?inline"
import Heading from "../heading/heading";


export default component$(() => {

    useStyles$(Styles)
    return (
        <>
            <section class="display-section">
               
                    <Heading>
                        <Slot name="title" />
                    </Heading>
                    <article >
                    <ul class="display-ul">
                        <Slot />
                    </ul>
                </article>
            </section>
        </>
    );
});
