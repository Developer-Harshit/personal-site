import {  component$, useStylesScoped$ } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Styles from "./style.css?inline";
import ItemStyles from "./item-style.css?inline";
interface cardItemProp {
  ahref: string;
  isrc: string;
  title: string;
  tags: string[];
}
interface cardProp {
  items: cardItemProp[];
  cid: string;
  
}

const CardItem = component$((prop: cardItemProp) => {
  useStylesScoped$(ItemStyles);
  return (
    <>
      <article key={prop.isrc}>
        <Image src={"/thumbnails/" + prop.isrc + ".png"}
           layout="constrained"
           width={480}
           height={128}
        backgorund="#8a2be2"
        alt={prop.title}
        />
        <div class="card-info">
        <h3>
          <Link href={prop.ahref}>{prop.title}</Link>
        </h3>

        <div class="tags">
          {prop.tags.map((tag) => (
            <span key={tag}>{tag}</span>
            ))}
        </div>
      </div>
      </article>
    </>
  );
});

export default component$((prop: cardProp) => {
  useStylesScoped$(Styles);
  return (
    <section id={prop.cid} class="card-sect">
      {prop.items.map((item) => (
        <CardItem
          ahref={item.ahref}
          isrc={item.isrc}
          title={item.title}
          tags={item.tags}
          key={item.isrc}
        />
      ))}
    </section>
  );
});
