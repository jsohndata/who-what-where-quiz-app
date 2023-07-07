import { Link } from "react-router-dom";

export default function NavMenu() {

  return (
    <nav>
      <ul>
        <li><Link to="/quiz-app-c11/movie">Movie</Link></li>
        <li><Link to="/quiz-app-c11/travel">Travel</Link></li>
      </ul>
    </nav>
  );
};
