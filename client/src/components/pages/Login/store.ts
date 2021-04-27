import { Action, Reducer } from "redux";
import { RootState } from "../../../redux/reducers";

// =============================================================================
// State
// =============================================================================
export interface AuthenticationState {
	userId: string;
	isLoggedIn: boolean;
}

const INITIAL_STATE: AuthenticationState = {
	userId: "",
	isLoggedIn: false,
}

// =============================================================================
// Actions
// =============================================================================
export enum AuthenticationActionTypes {
	LOG_IN = "auth/login",
	LOG_OUT = "login/logout"
}

interface LoginAction extends Action<AuthenticationActionTypes.LOG_IN> {
	payload: { userId: string },
}
interface LogoutAction extends Action<AuthenticationActionTypes.LOG_OUT> { }

export const login = (userId: string): LoginAction => {
	return {
		type: AuthenticationActionTypes.LOG_IN,
		payload: { userId },
	}
}
export const logout = (): LogoutAction => {
	return {
		type: AuthenticationActionTypes.LOG_OUT,
	}
}

type AuthenticationActions = LoginAction | LogoutAction;

// =============================================================================
// Reducer
// =============================================================================
export const AuthenticationReducer: Reducer<AuthenticationState, AuthenticationActions> =
	(state = INITIAL_STATE, action) => {
		if (action.type === AuthenticationActionTypes.LOG_IN) {
			return { ...state, isLoggedIn: true, userId: action.payload.userId }
		}
		if (action.type === AuthenticationActionTypes.LOG_OUT) {
			return { ...state, isLoggedIn: false }
		}
		return { ...state }
	}

// =============================================================================
// Selectors
// =============================================================================
const getAuthState = (state: RootState): AuthenticationState => state.authentication

export const authenticationSelectors = {
	getAuthState,
}
