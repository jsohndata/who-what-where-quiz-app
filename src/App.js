import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './pages/Movie';
import Travel from './pages/Travel';
import Err404 from './pages/Err404';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/quiz-app-c11/travel" element={ <Travel /> } />
        <Route path="/quiz-app-c11/movie" element={ <Movie />} />
        <Route path="/quiz-app-c11" element={ <Movie />} />
        <Route path="*" element={ <Err404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
