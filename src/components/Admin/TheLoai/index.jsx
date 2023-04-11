import { useSelector } from "react-redux";
import ItemTL from "./itemTL";
import { Link } from "react-router-dom";

function TheLoai() {
  const theLoai = useSelector((state) => state.POST.articleTheLoais);

  return (
    <>
      <h2 style={{ textAlign: "center", color: "#264653", fontSize: "32px" }}>
        Thể loại
      </h2>
      <button>
        <Link to="/doashboard/themtheloai">Thêm</Link>
      </button>
      <table className="table">
        <thead style={{ border: "1px #000 solid" }}>
          <tr>
            <th scope="col">Tên thể loại</th>
            <th scope="col">Thứ tự thể loại</th>
            <th scope="col">Ẩn hiện thể loại</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {theLoai.map((item) => (
            <ItemTL key={item._id} data={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TheLoai;
