import { useSelector } from "react-redux";
import ItemTinTuc from "./itemTinTuc";
import { Link } from "react-router-dom";

function TinTuc() {
  const tunTuc = useSelector((state) => state.POST.articlePostItem);

  return (
    <>
      <h2 style={{ textAlign: "center", color: "#264653", fontSize: "32px" }}>
        Thể loại
      </h2>
      <button>
        <Link to="/doashboard/themtintuc">Thêm</Link>
      </button>
      <table className="table">
        <thead style={{ border: "1px #000 solid" }}>
          <tr>
            <th scope="col">Tên bài viết</th>
            <th scope="col">Nội dung</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Âm thanh</th>
            <th scope="col">Tóm tắt</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {tunTuc.map((item) => (
            <ItemTinTuc data={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TinTuc;
