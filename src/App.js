import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import background from './assets/background.jpg';

//Component imports
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { NotFound } from './components/NotFound/NotFound';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
