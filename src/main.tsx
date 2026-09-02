import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { CustomCursor } from "./components/custom-cursor";

import AboutMe from "./pages/about-me";
import Projects from "./pages/projects";
import Research from "./pages/research";
import Games from "./pages/games";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Music from "./pages/music";
import Blog from "./pages/blog";
import Community from "./pages/community";
import Trainings from "./pages/trainings";
import NotFound from "./pages/not-found";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <CustomCursor />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="research" element={<Research />} />
        <Route path="games" element={<Games />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="music" element={<Music />} />
        <Route path="blog" element={<Blog />} />
        <Route path="community" element={<Community />} />
        <Route path="trainings" element={<Trainings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
