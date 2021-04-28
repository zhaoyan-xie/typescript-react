import { FormStateMap, reducer as FormReducer } from "redux-form";
import { combineReducers } from "redux";
import { AuthenticationReducer, AuthenticationState } from "../../components/pages/Login/store";
import { StreamCreateReducer, StreamState } from "../../components/pages/Streams/store";

export interface RootState {
	authentication: AuthenticationState,
	stream: StreamState,
	form: FormStateMap,
};

export default combineReducers<RootState>({
	authentication: AuthenticationReducer,
	stream: StreamCreateReducer,
	form: FormReducer,
});
