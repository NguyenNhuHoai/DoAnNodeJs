import { mappingPostData } from "../../helpers";
import categoriesServices from "../../services/categories";
import postServices from "../../services/post";
import theLoaiServices from "../../services/theLoai";

// Actions type
export const ACT_FETCH_NEWS = "ACT_FETCH_NEWS";
export const ACT_FETCH_CATEGORIES = "ACT_FETCH_CATEGORIES";
export const ACT_FETCH_THELOAI = "ACT_FETCH_THELOAI";
export const ACT_FETCH_DELETE_TINTUC = "ACT_FETCH_DELETE_TINTUC";
export const ACT_FETCH_DELETE_LOAITIN = "ACT_FETCH_DELETE_LOAITIN";
export const ACT_FETCH_DELETE_THELOAI = "ACT_FETCH_DELETE_THELOAI";
export const ACT_FETCH_ADD_TINTUC = "ACT_FETCH_ADD_TINTUC";
// Action

export function actFetchNews(posts) {
  return {
    type: ACT_FETCH_NEWS,
    payload: {
      posts,
    },
  };
}

export function actFetchCategories(categories) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      categories,
    },
  };
}

export function actFetchTheLoai(theLoais) {
  return {
    type: ACT_FETCH_THELOAI,
    payload: {
      theLoais,
    },
  };
}

export function actFetchDeleteTinTuc(id, data) {
  return {
    type: ACT_FETCH_DELETE_TINTUC,
    payload: {
      id,
    },
  };
}

export function actFetchDeleteLoaiTin(id) {
  return {
    type: ACT_FETCH_DELETE_LOAITIN,
    payload: {
      id,
    },
  };
}

export function actFetchDeleteTheLoai(id) {
  return {
    type: ACT_FETCH_DELETE_THELOAI,
    payload: {
      id,
    },
  };
}

export function actFetchAddTinTuc(response) {
  return {
    type: ACT_FETCH_ADD_TINTUC,
    payload: {
      response,
    },
  };
}

//Action async

export function actFetchNewsAsync() {
  return async (dispatch) => {
    try {
      const response = await postServices.getAllNew();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchNews(posts));
    } catch (error) {
      // TODO
    }
  };
}

export function actFetchCategoriesAsync() {
  return async (dispatch) => {
    try {
      const response = await categoriesServices.getList();
      const categories = response.data;
      dispatch(actFetchCategories(categories));
    } catch (error) {
      // TODO
    }
  };
}

export function actFetchTheLoaiAsync() {
  return async (dispatch) => {
    try {
      const response = await theLoaiServices.getList();
      const theLoais = response.data;
      dispatch(actFetchTheLoai(theLoais));
    } catch (error) {
      // TODO
    }
  };
}

export function actFetchDeleteTinTucAsync({ id }) {
  return async (dispatch) => {
    try {
      const response = postServices.deleteTinTuc({ id });
      const data = response.data;
      dispatch(actFetchDeleteTinTuc(id, data));
    } catch (error) {}
  };
}

export function actFetchAddTinTucAsync({
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
  return async (dispatch) => {
    try {
      const response = await postServices.addTinTuc({
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
      console.log(response);
      dispatch(actFetchAddTinTuc(response));
    } catch (error) {}
  };
}
