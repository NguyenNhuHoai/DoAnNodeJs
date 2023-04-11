import * as React from "react";

import { useDispatch } from "react-redux";

import "./index.css";
import { actFetchAddTinTucAsync } from "../../../store/post/action";
function AddTinTuc() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    tieude: {
      value: "",
    },
    tomtat: {
      value: "",
    },
    linkhinhanh: {
      value: "",
    },
    linkradio: {
      value: "",
    },
    noidung: {
      value: "",
    },
    loaitin: {
      value: "",
    },
    anhientin: {
      value: "true",
    },
    tinnoibat: {
      value: "true",
    },
    ngay: {
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
    console.log(formData);
    dispatch(
      actFetchAddTinTucAsync({
        tieude: formData.tieude.value,
        tomtat: formData.tomtat.value,
        noidung: formData.noidung.value,
        urlhinh: formData.urlhinh.value,
        urlradio: formData.urlradio.value,
        ngay: formData.ngay.value,
        tinnoibac: formData.tinnoibat.value,
        anhientin: formData.anhientin.value,
        loaitin: formData.loaitin.value,
      })
    );
  }
  return (
    <>
      <form action="/doashboard/themtintuc"  onSubmit={handleSubmit} >
        <label for="fname">Tiêu đề</label>
        <input
          type="text"
          id="fname"
          placeholder="Tiêu đề.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          onChange={handleOnchangeValue}
          value={formData.tieude.value}
          name="tieude"
        />
        <label for="fname">Tóm tắt</label>
        <input
          type="text"
          id="fname"
          placeholder="Tóm tắt.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.tomtat.value}
          name="tomtat"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Link hình ảnh</label>
        <input
          type="text"
          id="fname"
          placeholder="Link hình ảnh.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.linkhinhanh.value}
          name="linkhinhanh"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Link radio</label>
        <input
          type="text"
          id="fname"
          placeholder="Link radio.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.linkradio.value}
          name="linkradio"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Ngày</label>
        <input
          type="text"
          id="fname"
          placeholder="ngày.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.ngay.value}
          name="ngay"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Loại tin</label>
        <input
          type="text"
          id="fname"
          placeholder="Loại tin.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.loaitin.value}
          name="loaitin"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Tin nổi bật</label>
        <input
          type="text"
          id="fname"
          placeholder="Tin nổi bật.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.tinnoibat.value}
          name="tinnoibat"
          onChange={handleOnchangeValue}
        />
        <label for="fname">Ẩn hiện tin</label>
        <input
          type="text"
          id="fname"
          placeholder="Ẩn hiện tin.."
          style={{
            fontSize: "12px",
            height: "30px",
          }}
          value={formData.tinnoibat.value}
          name="tinnoibat"
          onChange={handleOnchangeValue}
        />

        <label for="fname">Nội dung</label>
        <textarea
          value={formData.noidung.value}
          name="noidung"
          onChange={handleOnchangeValue}
        ></textarea>
        {/* <button onClick={handleSubmit}>Đăng tin</button> */}
        <input type="submit" value="Đăng ký" name="submitform"/>
      </form>
    </>
  );
}

export default AddTinTuc;
