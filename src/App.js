import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Ofertas from './pages/Ofertas';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Faqs from './pages/Faqs';

const App = () => {
  return (
    <div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/ofertas" element={<Ofertas />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/main/faqs" element={<Faqs />} />
          <Route path="/ofertas/faqs" element={<Faqs />} />
          <Route path="/main/ofertas/faqs" element={<Faqs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App