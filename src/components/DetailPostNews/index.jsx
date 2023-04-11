import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './detailPostNews.css'
export function DetailNews() {
  const { id } = useParams();
  const posts = useSelector((state) => state.POST.articlePostItem);
  console.log(id);
  var post;
  posts.forEach(element => {
    if (element.id === id) {
      post = element;
      console.log(post);
    }
  });
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article className="format-gallery">
            <div className="content-media">
              <div className="post-slider flexslider"></div>
            </div>
            <div className="primary-content">
              <h1 className="entry-title">
                {post.tenbaiviet}
              </h1>
              <audio src={post.amThanh} controls loop></audio>
              <p>{post.tomtat}</p>
              <div className="img">
                <img src={post.hinhAnh} alt="" />
              </div>
              <p>
               {post.noidung}
              </p>
            </div>
          </article>
        </div>
      </div>
   
    </section>
  );
}

export default DetailNews;
