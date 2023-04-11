import api from "./api";

const postServices = {
  getList() {
    return api.call().get("/v1/tinTuc", {
      params: {},
    });
  },
  getAllNew() {
    return postServices.getList({});
  },
  deleteTinTuc(id) {
    return api.call().delete("/v1/tinTuc/" + id, {
      params: {},
    });
  },
  addTinTuc({
    tieude,
    tomtat,
    noidung,
    urlhinh,
    urlradio,
    ngay,
    tinnoibac,
    anhientin,
    loaitin,
  }) {
    return api.call().post("/v1/tinTuc", {
      tieude,
      tomtat,
      noidung,
      urlhinh,
      urlradio,
      ngay,
      tinnoibac,
      anhientin,
      loaitin,
    });
  },
};

export default postServices;
