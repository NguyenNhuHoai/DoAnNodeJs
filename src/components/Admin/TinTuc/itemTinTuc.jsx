import { useDispatch } from "react-redux";
import { actFetchDeleteTinTuc } from "../../../store/post/action";

function ItemTinTuc({ data }) {
  const { id, loaiTin, noidung, tenbaiviet, tomtat, ngayTao } = data;
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(actFetchDeleteTinTuc(id));
  }
  return (
    <tr style={{ textAlign: "center" }}>
      <th scope="row">{tenbaiviet}</th>
      <td style={{ textAlign: "justify" }}>{noidung}</td>
      <td>{ngayTao}</td>
      <td>{loaiTin}</td>
      <td style={{ textAlign: "justify" }}>{tomtat}</td>
      <td>
        <button>Sửa</button>
        <button onClick={handleDelete}>Xoá</button>
      </td>
    </tr>
  );
}

export default ItemTinTuc;
