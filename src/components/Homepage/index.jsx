import {  useSelector } from "react-redux";

import Item from "../Item";

function Homepage(params) {


  const posts = useSelector((state) => state.POST.articlePostItem);
  return (
    <>
      <section id="bricks">
        <div className="row masonry">
          {/* brick-wrapper */}
          <div className="bricks-wrapper">
            <div className="grid-sizer" />
            {posts.map((post) => (
              <Item key={post.id} post={post}></Item>
            ))}
          </div>
        </div>
        {/* <div className="row">
                    <nav className="pagination">
                        <span className="page-numbers prev inactive">Prev</span>
                        <span className="page-numbers current">1</span>
                        <a href="#" className="page-numbers">2</a>
                        <a href="#" className="page-numbers">3</a>
                        <a href="#" className="page-numbers">4</a>
                        <a href="#" className="page-numbers">5</a>
                        <a href="#" className="page-numbers">6</a>
                        <a href="#" className="page-numbers">7</a>
                        <a href="#" className="page-numbers">8</a>
                        <a href="#" className="page-numbers">9</a>
                        <a href="#" className="page-numbers next">Next</a>
                    </nav>
                </div> */}
      </section>
    </>
  );
}

export default Homepage;
