import api from "./api";

const theLoaiServices = {
  getList() {
    return api.call().get("/v1/theLoai", {
      params: {},
    });
  },
};

export default theLoaiServices;
