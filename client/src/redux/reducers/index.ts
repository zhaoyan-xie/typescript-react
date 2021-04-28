import { FormStateMap, reducer as FormReducer } from "redux-form";
import { combineReducers } from "redux";
import { AuthenticationReducer, AuthenticationState } from "../../components/pages/Login/store";
import { StreamCreateReducer, StreamCreateState } from "../../components/pages/Streams/store";

export interface RootState {
	authentication: AuthenticationState,
	streamCreate: StreamCreateState,
	form: FormStateMap,
};

export default combineReducers<RootState>({
	authentication: AuthenticationReducer,
	streamCreate: StreamCreateReducer,
	form: FormReducer,
});
