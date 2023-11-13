import { component$, useStylesScoped$ } from "@builder.io/qwik";
import GithubLogo from '~/media/github.png?jsx';
import InstaLogo from '~/media/instagram.png?jsx';
import YoutubeLogo from '~/media/youtube.png?jsx';

import FooterStyles from "./style.css?inline"
export default component$(() => {
useStylesScoped$(FooterStyles)

  return (
    <footer class="m-16">
     <ul class="flex gap-4 justify-center">
     
      <li>
        <a href="http://instagram.com">
        <InstaLogo class="w-8 h-8 insta" />
        </a>
      </li>
      <li>
        <a href="http://github.com">
        <GithubLogo class="w-8 h-8 github" />
        </a>
      </li>
      <li>
        <a href="http://youtube.com">
        <YoutubeLogo class="w-8 h-8 youtube" />
        </a>
      </li>
     </ul>
    </footer>
  );
});
