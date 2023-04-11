import Item from "../Item/index";

function CategoryItem({ categoriesItem, posts }) {
  var postItem = [];
  posts.forEach((element) => {
    if (element.loaiTin === categoriesItem._id) {
      postItem.push(element);
    }
  });
  return (
    <>
      {postItem.map((post) => (
        <>
          <div className="grid-sizer" />
          <Item post={post}></Item>
        </>
      ))}
    </>
  );
}

export default CategoryItem;
