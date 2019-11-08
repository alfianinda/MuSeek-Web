import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listMusicianReducer from "./listMusicianReducer";
import profileReducer from "./profileReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  authReducer,
  listMusicianReducer,
  profileReducer,
  eventReducer
});
