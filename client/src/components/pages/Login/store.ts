import { Action, Reducer } from "redux";
import { RootState } from "../../../redux/reducers";

export interface AuthenticationState {
	isLoggedIn: boolean;
}

const INITIAL_STATE: AuthenticationState = {
	isLoggedIn: false,
}

export enum AuthenticationActionTypes {
	LOG_IN = "auth/login",
	LOG_OUT = "login/logout"
}

interface LoginAction extends Action<AuthenticationActionTypes.LOG_IN> { }
interface LogoutAction extends Action<AuthenticationActionTypes.LOG_OUT> { }

export const login = (): LoginAction => {
	return {
		type: AuthenticationActionTypes.LOG_IN,
	}
}
export const logout = (): LogoutAction => {
	return {
		type: AuthenticationActionTypes.LOG_OUT,
	}
}

type AuthenticationActions = LoginAction | LogoutAction;

export const AuthenticationReducer: Reducer<AuthenticationState, AuthenticationActions> =
	(state = INITIAL_STATE, action) => {
		if (action.type === AuthenticationActionTypes.LOG_IN) {

			return { ...state, isLoggedIn: true }
		}
		if (action.type === AuthenticationActionTypes.LOG_OUT) {
			return { ...state, isLoggedIn: false }
		}
		return { ...state }
	}

const getAuthState = (state: RootState): AuthenticationState => state.authentication

export const authenticationSelectors = {
	getAuthState,
}
