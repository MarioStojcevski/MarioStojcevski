import { component$ } from "@builder.io/qwik";
import "./header.module.css"

export default component$(() => {
  return (
    <nav>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </nav>
  );
});