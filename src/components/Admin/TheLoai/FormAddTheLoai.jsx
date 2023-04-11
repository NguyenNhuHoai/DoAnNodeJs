import * as React from "react";

import { useDispatch } from "react-redux";


import { actFetchAddTinTucAsync } from "../../../store/post/action";
function AddTheLoai() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    tentheloai: {
      value: "",
    },
    thututheloai: {
      value: "",
    },
    anhientheloai: {
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
          placeholder="Tên thể loại.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          onChange={handleOnchangeValue}
          value={formData.tentheloai.value}
          name="tentheloai"
        />
        <label for="fname">Thứ tự thể loại</label>
        <input
          type="text"
          id="fname"
          placeholder="Thứ tự thể loại.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.thututheloai.value}
          name="thututheloai"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Ẩn hiện thể loại</label>
        <input
          type="text"
          id="fname"
          placeholder="Ẩn hiện thể loại.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.anhientheloai.value}
          name="anhientheloai"
          onChange={handleOnchangeValue}
        />

        {/* <button onClick={handleSubmit}>Đăng tin</button> */}
        <input type="submit" value="Lưu" name="submitform" />
      </form>
    </>
  );
}

export default AddTheLoai;
