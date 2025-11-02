import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";

import Home from './pages/Home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import Art from './pages/art';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-me' element={<AboutMe />} />
        <Route path='projects' element={<Projects />} />
        <Route path='art' element={<Art />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);