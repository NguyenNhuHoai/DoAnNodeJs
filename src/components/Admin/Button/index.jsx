import { Link } from "react-router-dom";

function Buttons({ links, names }) {
  return (
    <li className="nav-item">
      <Link to={links} className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table" />
        <span>{names}</span>
      </Link>
    </li>
  );
}

export default Buttons;
