import { Link } from "react-router-dom";

export default function NavMenu() {

  return (
    <nav>
      <ul>
        <li><Link to="/movie">Movie</Link></li>
        <li><Link to="/travel">Travel</Link></li>
      </ul>
    </nav>
  );
};
