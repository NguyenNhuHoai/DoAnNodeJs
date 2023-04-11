import { ACCESS_TOKEN } from "../../constants";
import { ACT_FETCH_ACOUNT, ACT_LOGIN_SUCCES, ACT_LOGOUT_SUCCES } from "./action";

const initState = {
  token: "",
  currentUser: null,
  articlePostUser: [],
};

function reducer(authState = initState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCES:
      localStorage.setItem(ACCESS_TOKEN, action.payload.tokens);
      return {
        token: action.payload.tokens,
        currentUser: action.payload.user,
      };
    case ACT_LOGOUT_SUCCES: {
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        tokens: "",
        currentUser: null,
      };
    }
    case ACT_FETCH_ACOUNT:{
      return{
        ...authState,
        articlePostUser: action.payload.postUser
      }
    }
    default:
      return authState;
  }
}

export default reducer;
