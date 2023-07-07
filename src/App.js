import { HashRouter, Routes, Route } from 'react-router-dom';
import Movie from './pages/Movie';
import Travel from './pages/Travel';
import Who from './pages/Who';
import Err404 from './pages/Err404';
import './styles/App.css';

function App() {
  return (
    <HashRouter>
      <Routes>        
        <Route path="/who" element={ <Who /> } />
        <Route path="/where" element={ <Travel /> } />
        <Route path="/what" element={ <Movie />} />
        <Route path="/" element={ <Movie />} />
        <Route path="*" element={ <Err404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
