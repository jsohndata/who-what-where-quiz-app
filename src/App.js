import { HashRouter, Routes, Route } from 'react-router-dom';
import Movie from './pages/Movie';
import Travel from './pages/Travel';
import Err404 from './pages/Err404';
import './styles/App.css';

function App() {
  return (
    <HashRouter>
      <Routes>        
        <Route path="/travel" element={ <Travel /> } />
        <Route path="/movie" element={ <Movie />} />
        <Route path="/" element={ <Movie />} />
        <Route path="*" element={ <Err404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
