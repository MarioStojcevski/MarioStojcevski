import { Link } from "react-router";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { QUICK_LINKS_EXTENDED } from "@/constants/social";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <ScrollReveal>
          <Card className="bg-chart-5 max-w-2xl w-full">
            <CardContent className="pt-12 pb-12 text-center">
              <motion.h1
                className="text-8xl lg:text-9xl font-heading mb-4"
                animate={{ rotate: [0, -3, 3, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                404
              </motion.h1>
              <h2 className="text-3xl lg:text-4xl font-heading mb-6">Page Not Found</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist.
                It might have been moved, deleted, or you might have typed the wrong URL.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/">
                  <Button className="text-lg px-6 py-3">Go Home</Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="text-lg px-6 py-3">
                    View Projects
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="max-w-2xl w-full">
          <Footer quickLinks={QUICK_LINKS_EXTENDED} />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
