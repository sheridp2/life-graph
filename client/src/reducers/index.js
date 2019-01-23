import { combineReducers } from "redux";
import { reducer as reduxForm} from 'redux-form';
import authReducer from "./authReducer";
import entrysReducer from "./entrysReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  entrys: entrysReducer
});
