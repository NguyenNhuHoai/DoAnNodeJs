import {
  ACT_FETCH_ADD_TINTUC,
  ACT_FETCH_CATEGORIES,
  ACT_FETCH_DELETE_LOAITIN,
  ACT_FETCH_DELETE_THELOAI,
  ACT_FETCH_DELETE_TINTUC,
  ACT_FETCH_NEWS,
  ACT_FETCH_THELOAI,
} from "./action";

const initState = {
  articlePostItem: [],
  articleCategories: [],
  articleTheLoais: [],
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_NEWS:
      return {
        ...postState,
        articlePostItem: action.payload.posts,
      };
    case ACT_FETCH_CATEGORIES:
      return {
        ...postState,
        articleCategories: action.payload.categories,
      };
    case ACT_FETCH_THELOAI:
      return {
        ...postState,
        articleTheLoais: action.payload.theLoais,
      };
    case ACT_FETCH_DELETE_TINTUC:
      const id = action.payload.id;
      const newarticlePostItem = postState.articlePostItem.filter(
        (item) => item.id !== id
      );
      return {
        ...postState,
        articlePostItem: newarticlePostItem,
      };
    case ACT_FETCH_DELETE_LOAITIN:
      const _id = action.payload.id;
      const newarticleCategories = postState.articleCategories.filter(
        (item) => item._id !== _id
      );
      return {
        ...postState,
        articleCategories: newarticleCategories,
      };
    case ACT_FETCH_DELETE_THELOAI:
      const idTL = action.payload.id;
      const newarticleTheLoai = postState.articleTheLoais.filter(
        (item) => item._id !== idTL
      );
      return {
        ...postState,
        articleTheLoais: newarticleTheLoai,
      };
    case ACT_FETCH_ADD_TINTUC:
      const data = action.payload.response;
      console.log(data);
      const newItemAddTinTuc = {
        tieude: data.tieude,
        tomtat: data.tomtat,
        noidung: data.noidung,
        urlhinh: data.urlhinh,
        urlradio: data.urlradio,
        ngay: data.ngay,
        tinnoibac: data.tinnoibac,
        anhientin: data.anhientin,
        loaitin: data.loaitin,
      };
      const newListPostItemTinTuc = [
        ...postState.articlePostItem,
        newItemAddTinTuc,
      ];
      return {
        ...postState,
        articlePostItem: newListPostItemTinTuc,
      };
    default:
      return postState;
  }
}

export default reducer;
