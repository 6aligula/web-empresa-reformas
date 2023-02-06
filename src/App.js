import React from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Faqs from './pages/Faqs';
import Lavabos from './pages/Lavabos';
import Cocinas from './pages/Cocinas';

import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer';
import Suelos from './pages/Suelos';

const App = () => {
  return (
    <>

      <main className='py-3'>

        <Container>
          <HashRouter>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/main/faqs" element={<Faqs />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path='/lavabos' element={<Lavabos />} />
              <Route path="/main/lavabos" element={<Lavabos />} />
              <Route path='/cocina' element={<Cocinas />} />
              <Route path="/main/cocina" element={<Cocinas />} />
              <Route path='/suelos' element={<Suelos />} />
              <Route path="/main/suelos" element={<Suelos />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </HashRouter>
        </Container>
      </main>

    </>
  )
}

export default App