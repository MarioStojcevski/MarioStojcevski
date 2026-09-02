import { BentoDock } from "./navigation/bento-dock";
import { RetroDashboard } from "./retro-dashboard";
import NeobrutalistBlobs from "./neobrutalist-blobs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative pb-28 pt-8">
      <RetroDashboard />
      <NeobrutalistBlobs />
      <div className="relative z-10 mx-4 my-6 md:mx-8 md:my-8 lg:mx-16 lg:my-10 xl:mx-24 xl:my-12">
        <main className="relative z-10">{children}</main>
      </div>
      <BentoDock />
    </div>
  );
};

export default Layout;
