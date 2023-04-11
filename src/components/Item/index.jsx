import { Link } from "react-router-dom";
function Item({ post }) {
  var tenbaiviet, tomtat;
  if (post.tomtat.length > 50) {
    tomtat = post.tomtat.substring(0, 65) + "...";
  }

  if (post.tenbaiviet.length > 30) {
    tenbaiviet = post.tenbaiviet.substring(0, 35) + "...";
  }
  const id = post.id;
  const slug = "/DetailNews/" + id;
  return (
    <>
      <article className="brick entry format-standard animate-this">
        <div className="entry-thumb">
          <Link to={slug} className="thumb-link">
            <img src={post.hinhAnh} alt="building" />
          </Link>
        </div>
        <div className="entry-text">
          <div className="entry-header">
            <h1 className="entry-title">
              <a href="single-standard.html">{tenbaiviet}</a>
            </h1>
          </div>
          <div className="entry-excerpt">{tomtat}</div>
        </div>
      </article>
    </>
  );
}

export default Item;
