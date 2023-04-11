import * as React from "react";

import { useDispatch } from "react-redux";

// import { actFetchAddTinTucAsync } from "../../../store/post/action";
function AddLoaiTin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    tenloaitin: {
      value: "",
    },
    thutuloaitin: {
      value: "",
    },
    anhienloaitin: {
      value: "",
    },
    theloai: {
      value: "",
    },
  });

  function handleOnchangeValue(event) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    setFormData({
      ...formData,
      [name]: {
        value,
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(
    //   actFetchAddTinTucAsync({
    //     tieude: formData.tieude.value,
    //     tomtat: formData.tomtat.value,
    //     noidung: formData.noidung.value,
    //     urlhinh: formData.urlhinh.value,
    //     urlradio: formData.urlradio.value,
    //     ngay: formData.ngay.value,
    //     tinnoibac: formData.tinnoibat.value,
    //     anhientin: formData.anhientin.value,
    //     loaitin: formData.loaitin.value,
    //   })
    // );
  }
  return (
    <>
      <form action="/doashboard/themtintuc" onSubmit={handleSubmit}>
        <label for="fname">Tên thể loại</label>
        <input
          type="text"
          id="fname"
          placeholder="Tên loại tin.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          onChange={handleOnchangeValue}
          value={formData.tenloaitin.value}
          name="tenloaitin"
        />
        <label for="fname">Thứ tự loại tin</label>
        <input
          type="text"
          id="fname"
          placeholder="Thứ tự loại tin.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.thutuloaitin.value}
          name="thutuloaitin"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Ẩn hiện loại tin</label>
        <input
          type="text"
          id="fname"
          placeholder="Ẩn hiện loại tin.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.anhienloaitin.value}
          name="anhienloaitin"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Thể loại</label>
        <input
          type="text"
          id="fname"
          placeholder="Thể loại.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.theloai.value}
          name="theloai"
          onChange={handleOnchangeValue}
        />

        {/* <button onClick={handleSubmit}>Đăng tin</button> */}
        <input type="submit" value="Lưu" name="submitform" />
      </form>
    </>
  );
}

export default AddLoaiTin;
