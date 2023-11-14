import { Slot, component$ } from "@builder.io/qwik";
import Heading from "../heading/heading";

export default component$(() => {

    return (
        <>
            <article > 
                <Heading >
                    <Slot name="title"/>
                </Heading>

                <p class="about font-normal text-slate-600 "><Slot name="content"/></p>
            </article>
        </>
    );
});
