import api from "./api";

export const authService = {
  login(username, password) {
    return api.call().post("/v1/auth/loginUser", {
      username,
      password,
    });
  },
  register({ email, username, password }) {
    return api.call().post("/v1/auth/register", {
      email,
      username,
      password,
    });
  },
  fetchMe(tokens) {
    return api.call.call().get("/v1/user/getUser", {
      headers: {
        token: "Bearer " + tokens,
      },
    });
  },
  getAccount() {
    return api.call().get("/v1/user/getAllUser", {
      params: {},
    });
  },
};
