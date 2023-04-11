import { useDispatch } from "react-redux";
import { actFetchDeleteLoaiTin, actFetchDeleteTinTuc } from "../../../store/post/action";

function ItemLT({ data }) {
  const { _id, tenloaitin, thutuloaitin, anhienloaitin, theloai } = data;
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(actFetchDeleteLoaiTin(_id))
  }

  return (
    <tr style={{ textAlign: "center" }}>
      <th scope="row">{tenloaitin}</th>
      <td>{thutuloaitin}</td>
      {<td>{theloai}</td>}
      <td>{anhienloaitin}</td>
      <td>
        <button style={{ marginRight: "4px" }}>Sửa</button>
        <button onClick={handleDelete}>Xoá</button>
      </td>
    </tr>
  );
}

export default ItemLT;
