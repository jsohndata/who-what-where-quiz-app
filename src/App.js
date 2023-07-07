import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Err404 from './pages/Err404';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz-app-c11/quiz" element={ <Quiz />} />
        <Route path="/" element={ <Quiz /> } />
        <Route path="*" element={ <Err404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
