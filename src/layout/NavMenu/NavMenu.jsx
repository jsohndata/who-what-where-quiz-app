import { Link } from "react-router-dom";

export default function NavMenu() {

  return (
    <nav>
      <ul>
        <li><Link to="/what">What</Link></li>
        <li><Link to="/where">Where</Link></li>
        <li><Link to="/who">Who</Link></li>
      </ul>
    </nav>
  );
};
