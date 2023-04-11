import api from "./api";

const categoriesServices = {
  getList() {
    return api.call().get("/v1/loaiTin", {
      params: {},
    });
  },
};

export default categoriesServices;
