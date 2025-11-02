import Navigation from "./navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-5 my-5 md:mx-20 md:my-5 lg:mx-40 lg:my-10 xl:mx-40 xl:my-10">
      <Navigation />
      <main className="py-5">{children}</main>
    </div>
  );
};

export default Layout;