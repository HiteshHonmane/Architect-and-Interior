import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';
import './index.css';
import Home from './components/home/Home';
import Layout from './components/Layout.jsx';
import Contact from './components/contact form/Contact';
import Lenis from '@studio-freight/lenis';
import Footer from './components/footer/Footer.jsx';
import Team from './components/team/Team';
import TestimonialsPage from './pages/TestimonialsPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import Parallax from './components/parallax/Parallax.jsx';
import Special from './components/Special/Special.jsx';
import BlogSecondPage from './components/blog/BlogSecondPage.jsx';

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route path='' element={<Home/>}/>
//             <Route path='Parallex' element={<Parallax />} />
//             <Route path='ServicesPage' element={<ServicesPage />} />
//             <Route path='Team' element={<Team />} />
//             <Route path='TestimonialsPage' element={<TestimonialsPage/>} />
//             <Route path='BlogPage' element={<BlogPage />} />
//             <Route path='FAQPage' element={<FAQPage/>} />
//             <Route path='FAQPage' element={<Contact/>} />
//             <Route path='FAQPage' element={<Footer/>} />
//      </>
//     )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <App/>
);
