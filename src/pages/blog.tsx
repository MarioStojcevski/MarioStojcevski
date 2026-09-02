import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import { blogPosts } from "@/constants/blog";
import type { BlogPost } from "@/constants/blog";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const tagColors: Record<string, string> = {
    Design: "bg-chart-5",
    CSS: "bg-chart-2",
    "UI/UX": "bg-chart-3",
    Audio: "bg-chart-4",
    JavaScript: "bg-chart-1",
    Career: "bg-chart-5",
    Tools: "bg-chart-2",
    Performance: "bg-chart-3",
  };

  return (
    <Layout>
      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: -1 }}
          whileHover={{ rotate: 0 }}
        >
          Blog
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12">
          Thoughts on design, code, audio engineering, and the intersection of technology and creativity.
        </p>
      </ScrollReveal>

      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <StaggerItem key={post.id}>
            <motion.div
              style={{ rotate: (index % 3 - 1) }}
              whileHover={{ rotate: [0, -6, 9, -4, 6, 0], scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="bg-white h-full cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="text-xs font-bold text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="text-2xl font-heading mb-3">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} className={cn("text-xs border-black text-black", tagColors[tag] || "bg-gray-200")}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 flex items-start justify-center overflow-y-auto py-12 px-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b-4 border-black p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500 mb-2">
                      {new Date(selectedPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading">{selectedPost.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center text-black font-bold hover:bg-black hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  >
                    X
                  </button>
                </div>
                <div className="flex flex-wrap gap-1 mt-4">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} className={cn("text-xs border-black text-black", tagColors[tag] || "bg-gray-200")}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h3 key={i} className="text-2xl font-heading mt-8 mb-4 border-b-4 border-black pb-2">
                          {paragraph.replace("## ", "")}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                      return (
                        <ul key={i} className="list-none space-y-2 mb-4">
                          {items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="font-bold text-chart-3 mt-1">■</span>
                              <span>{item.replace("- ", "")}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.startsWith("1. ")) {
                      const items = paragraph.split("\n").filter((l) => /^\d+\./.test(l));
                      return (
                        <ol key={i} className="list-none space-y-2 mb-4 counter-reset-[list-counter]">
                          {items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="font-bold bg-chart-1 border-2 border-black w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">
                                {j + 1}
                              </span>
                              <span>{item.replace(/^\d+\.\s*/, "")}</span>
                            </li>
                          ))}
                        </ol>
                      );
                    }
                    if (paragraph.startsWith("```")) {
                      const code = paragraph.replace(/```\w*\n?/, "").replace(/```$/, "");
                      return (
                        <pre key={i} className="bg-gray-900 text-chart-1 border-4 border-black p-4 mb-4 overflow-x-auto text-sm font-mono">
                          <code>{code}</code>
                        </pre>
                      );
                    }
                    return (
                      <p key={i} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t-4 border-black p-6">
                <Button onClick={() => setSelectedPost(null)} className="w-full">
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
