import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const categories = ["All", "Hobbies", "Events", "Travel", "Code"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  span: "tall" | "wide" | "normal";
}

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=800&fit=crop", alt: "Mountain trail", category: "Hobbies", span: "tall" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", alt: "Mountain peak", category: "Hobbies", span: "wide" },
  { src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=600&fit=crop", alt: "Forest path", category: "Hobbies", span: "normal" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=800&fit=crop", alt: "Alpine view", category: "Travel", span: "tall" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop", alt: "Lake view", category: "Travel", span: "wide" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=600&fit=crop", alt: "Kayaking", category: "Travel", span: "normal" },
  { src: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=600&h=800&fit=crop", alt: "Northern lights", category: "Travel", span: "tall" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop", alt: "Code setup", category: "Code", span: "wide" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop", alt: "Terminal", category: "Code", span: "normal" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop", alt: "Laptop coding", category: "Code", span: "tall" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop", alt: "Conference", category: "Events", span: "wide" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=600&fit=crop", alt: "Speaking", category: "Events", span: "normal" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=800&fit=crop", alt: "Workshop", category: "Events", span: "tall" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", alt: "Team work", category: "Code", span: "wide" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <Layout>
      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: -1 }}
          whileHover={{ rotate: 0 }}
        >
          Gallery
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          A collection of moments from hobbies, events, travels, and code.
        </p>
      </ScrollReveal>

      {/* Filter Bar */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ rotate: [0, -5, 8, -3, 5, 0], scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "px-4 py-2 text-sm font-bold border-4 border-black transition-all duration-150 cursor-pointer",
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                "break-inside-avoid cursor-pointer border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150",
                image.span === "tall" && "aspect-[3/4]",
                image.span === "wide" && "aspect-[4/3]",
                image.span === "normal" && "aspect-square"
              )}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black font-bold text-xl hover:bg-black hover:text-white transition-colors cursor-pointer z-10"
            >
              X
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black font-bold text-xl hover:bg-black hover:text-white transition-colors cursor-pointer z-10"
            >
              {"‹"}
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black font-bold text-xl hover:bg-black hover:text-white transition-colors cursor-pointer z-10"
            >
              {"›"}
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white border-4 border-black px-6 py-3 text-black font-bold">
              {filteredImages[lightboxIndex].alt}
              <span className="ml-4 text-gray-500">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
