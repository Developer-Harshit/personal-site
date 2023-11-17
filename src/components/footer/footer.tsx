import { component$, useStylesScoped$ } from "@builder.io/qwik";
import GithubLogo from '~/media/social/github.png?jsx';
import InstaLogo from '~/media/social/instagram.png?jsx';
import YoutubeLogo from '~/media/social/youtube.png?jsx';

import FooterStyles from "./style.css?inline"
export default component$(() => {
useStylesScoped$(FooterStyles)

  return (
    <footer>
     <ul class="flex gap-[var(--sep-normal)] justify-center">
      <li>
        <a href="http://instagram.com">
        <InstaLogo class="insta" />
        </a>
      </li>
      <li>
        <a href="http://github.com">
        <GithubLogo class="github" />
        </a>
      </li>
      <li>
        <a href="http://youtube.com">
        <YoutubeLogo class="youtube" />
        </a>
      </li>
     </ul>
    </footer>
  );
});
