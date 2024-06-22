import { combineReducers } from "redux";
import userReducer from "./userReducer";
import editedUserReducer from "./editedUserReducer1"; // Import the new reducer

const rootReducer = combineReducers({
  userState: userReducer,
  editedUser: editedUserReducer, // Add the new reducer
});

export default rootReducer;
