import { Link } from "react-router";
import Layout from "@/components/layout";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QUICK_LINKS_EXTENDED } from "@/constants/social";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <Card className="bg-chart-5 border-2 border-black max-w-2xl w-full">
          <CardContent className="p-8 text-center">
            <h1 className="text-8xl lg:text-9xl font-bold mb-4">404</h1>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-700 mb-8">
              Oops! The page you're looking for doesn't exist. 
              It might have been moved, deleted, or you might have typed the wrong URL.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="cursor-pointer">
                <Button className="text-lg px-6 py-3">Go Home</Button>
              </Link>
              <Link to="/projects" className="cursor-pointer">
                <Button variant="outline" className="text-lg px-6 py-3 bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700">
                  View Projects
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-2xl w-full">
          <Footer quickLinks={QUICK_LINKS_EXTENDED} />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

