import { combineReducers } from "redux";
import { AuthenticationReducer, AuthenticationState } from "../../components/pages/Login/store";

export interface RootState {
	authentication: AuthenticationState
};

export default combineReducers<RootState>({
	authentication: AuthenticationReducer,
});
