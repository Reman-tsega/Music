import * as types from "./actionTypes";

const initialState = {
  musics: {
    1:{
      title:"Seblye",
      author:"Teddy Afro",
      description:"fikir eske mekabir",
      coverImg:"..loading"
    },
    2:{
      title:"Seblye",
      author:"Teddy Afro",
      description:"fikir eske mekabir",
      coverImg:"..loading"
    },
  },
  error: null,
  loading: false,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MUSIC_START:
    case types.DELETE_MUSIC_START:
    case types.ADD_MUSIC_START:
    case types.EDIT_MUSIC_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_MUSIC_SUCCESS:
      return {
        ...state,
        musics: action.payload,
        loading: false,
      };
    case types.DELETE_MUSIC_SUCCESS:
    case types.ADD_MUSIC_SUCCESS:
    case types.EDIT_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_MUSIC_FAIL:
    case types.DELETE_MUSIC_FAIL:
    case types.ADD_MUSIC_FAIL:
    case types.EDIT_MUSIC_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default musicReducer;
