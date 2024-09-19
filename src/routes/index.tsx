import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import './index.module.css';

export default component$(() => (
  <div>
    <h1>
      Mario Stojcevski
    </h1>
    <h1>
      🚧🚧🚧 Under construction 🚧🚧🚧
    </h1>
  </div>
));

export const head: DocumentHead = {
  title: 'Mario Stojcevski',
  meta: [
    {
      name: 'This is my portfolio',
    },
  ],
};
