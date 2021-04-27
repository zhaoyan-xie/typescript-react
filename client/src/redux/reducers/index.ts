import { FormStateMap, reducer as FormReducer } from "redux-form";
import { combineReducers } from "redux";
import { AuthenticationReducer, AuthenticationState } from "../../components/pages/Login/store";

export interface RootState {
	authentication: AuthenticationState,
	form: FormStateMap,
};

export default combineReducers<RootState>({
	authentication: AuthenticationReducer,
	form: FormReducer,
});
