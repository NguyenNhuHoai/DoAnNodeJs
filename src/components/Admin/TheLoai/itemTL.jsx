import { useDispatch } from "react-redux";
import { actFetchDeleteTheLoai } from "../../../store/post/action";

export function ItemTL({ data }) {
  const { _id, tentheloai, thututheloai, anhientheloai } = data;
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(actFetchDeleteTheLoai(_id));
  }
  return (
    <tr style={{ textAlign: "center" }}>
      <th scope="row">{tentheloai}</th>
      <td>{thututheloai}</td>
      <td>{anhientheloai}</td>
      <td>
        <button style={{ marginRight: "4px" }}>Sửa</button>
        <button onClick={handleDelete}>Xoá</button>
      </td>
    </tr>
  );
}

export default ItemTL;
