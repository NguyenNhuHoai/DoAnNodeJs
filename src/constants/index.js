const BASE_URL = process.env.REACT_APP_BASE_URL;
export default BASE_URL;
export const ACCESS_TOKEN = "access_token";

export const MESSAGE_FORM_ERROR = {
  email_required: "Email không được rỗng",
  rest_user_invalid_email: "Email không hợp lệ",
  username_required: "Tên đăng nhập không được rỗng",
  password_required: "Mật khẩu không được rỗng",
  password_lenght: "Mật khẩu phải ít hơn 6 ký tự",

  existing_user_login: "tên đăng nhập đã tồn tại",
  existing_user_email: "email đã tồn tại",
  res_user_invalid_password: "Mật khẩu không hợp lệ",
  res_user_invalid_user: "Tên đăng nhập không hợp lệ",
};
