import { MESSAGE_FORM_ERROR } from "../constants";

export function mappingPostData(post) {
  return {
    // anhientin: post.anhientin,
    id: post._id,
    tenbaiviet: post.tieude,
    ngayTao: post.ngay,
    noidung: post.noidung,
    hinhAnh: post.urlhinh,
    amThanh: post.urlradio,
    tomtat: post.tomtat,
    solanxem: post.solanxem,
    loaiTin: post.loaitin,
    // tinnoibac: post.tinnoibac
  };
}

export function validateFormData({ value, name }) {
  let error = " ";
  if (name === "username" && !value) {
    error = "Username khong duoc rong";
  }
  if (name === "password") {
    if (!value) error = "Password khong duoc rong";
    else if (value.length < 6) error = "Pass word phai nhieu hon 6 ky tu";
  }
  return error;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function validateFormDataRegister({ value, name }) {
  let error = " ";
  if (name === "email") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required;
    } else if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
    }
  } else if (name === "username" && !value) {
    error = MESSAGE_FORM_ERROR.username_required;
  }
  if (name === "password") {
    if (!value) error = MESSAGE_FORM_ERROR.password_required;
    else if (value.length < 6) error = MESSAGE_FORM_ERROR.password_lenght;
  }
  return error;
}
