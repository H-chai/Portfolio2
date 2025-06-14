import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { ScrollToTop } from './utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="project/:id" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
