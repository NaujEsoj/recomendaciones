import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./components/Home";
import Login from './components/Login';
import NumTest from './components/layout/tests/NumbersTest';
import Knowledge from './components/layout/tests/KnowledgeTest';
import Otros from './components/Otros';
import MediaSelector from './components/MediaSelector';
import NotFound from './components/NotFound';
import MontlyList from './components/MontlyList';
import Books from './components/Books';
import Movies from './components/Movies';
import Games from './components/Games';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otros' element={<Otros />} />
          <Route path='/number-test' element={<NumTest />} />
          <Route path='/knowledge-test' element={<Knowledge />} />
          <Route path='/media-selector' element={<MediaSelector />} />
          <Route path='/montly-list' element={<MontlyList />} />
          <Route path='/books' element={<Books />} />
          <Route path='/games' element={<Games />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
