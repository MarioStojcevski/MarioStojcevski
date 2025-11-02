import Navigation from "./navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="py-5">{children}</main>
    </>
  );
};

export default Layout;