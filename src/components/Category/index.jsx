import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CategoryItem from "../CategoryItem";
function Category() {
  const posts = useSelector((state) => state.POST.articlePostItem);
  const categoties = useSelector((state) => state.POST.articleCategories);
  const theloais = useSelector((state) => state.POST.articleTheLoais);
  const { id } = useParams();
  var theloai, categoryItem;
  var category = [];
  theloais.forEach((element) => {
    if (element._id === id) {
      theloai = element;
    }
  });
  categoties.forEach((element) => {
    if (theloai._id === element.theloai) {
      category.push(element);
    }
  });
  // console.log(categoryItem);
  return (
    <>
      {category.map((item) => (
        <>
          <section id="page-header">
            <div className="row">
              <div className="col-full">
                <h1>{item.tenloaitin}</h1>
              </div>
            </div>
          </section>
          <section id="bricks" className="with-top-sep">
            <div className="">
              <div className="bricks-wrapper">
                <CategoryItem categoriesItem={item} posts={posts} />
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
}

export default Category;
