import { Link } from "react-router-dom";

function MenuItem({ theloai }) {
  const id = theloai._id;

  const slug = "/category/" + id;
  return (
    <li className="has-children">
      <Link to={slug} title>
        {theloai.tentheloai}
      </Link>
    </li>
  );
}

export default MenuItem;
