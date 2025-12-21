import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router";

import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import Games from './pages/games';
import Home from './pages/home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-me' element={<AboutMe />} />
        <Route path='projects' element={<Projects />} />
        <Route path='games' element={<Games />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);