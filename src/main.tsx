import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";

import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import Art from './pages/art';
import Home from './pages/home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='index' element={<Home />} />
        <Route path='about-me' element={<AboutMe />} />
        <Route path='projects' element={<Projects />} />
        <Route path='art' element={<Art />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);