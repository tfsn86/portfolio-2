import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Component imports
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { NotFound } from './components/NotFound/NotFound';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
