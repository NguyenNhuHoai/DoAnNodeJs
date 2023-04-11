import { useSelector } from "react-redux";
import ItemLT from "./ItemLT";
import { Link } from "react-router-dom";

function LoaiTin() {
  const loaiTin = useSelector((state) => state.POST.articleCategories);
  // const theLoai = useSelector((state) => state.POST.articleTheLoais);
  return (
    <>
      <h2 style={{ textAlign: "center", color: "#264653", fontSize: "32px" }}>
        Loại Tin
      </h2>
      <button>
        <Link to="/doashboard/themloaitin">Thêm</Link>
      </button>

      <table className="table">
        <thead style={{ border: "1px #000 solid" }}>
          <tr>
            <th scope="col">Tên loại tin</th>
            <th scope="col">Thứ tự loại tin</th>
            <th scope="col">Thể loại</th>
            <th scope="col">Ẩn hiện loại tin</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {loaiTin.map((item) => (
            <ItemLT key={item._id} data={item} />
          ))}
        </tbody>
        ;
      </table>
    </>
  );
}

export default LoaiTin;
