import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/shared/footer';
import Header from '~/components/shared/header';

export default component$(() => (
  <>
    <Header />
    <main>
      <Slot />
    </main>
    <Footer />
  </>
));
