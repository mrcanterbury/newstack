import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import 'normalize.css';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/Docs';
import Blog from './components/blog/Blog';
import NewArticle from './components/blog/NewArticle';
import Contact from './components/Contact';
import Error from './components/Error';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/new" element={<NewArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
  </BrowserRouter>,
  rootElement
);