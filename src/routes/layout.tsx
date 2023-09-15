import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
