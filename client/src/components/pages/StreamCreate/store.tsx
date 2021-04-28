import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { StreamFormData } from ".";
import streams from "../../../api/streams";
import { RootState } from "../../../redux/reducers";

export interface StreamCreateState {
  payload: {};
}

const INITIAL_STATE: StreamCreateState = {
  payload: {},
};
// =============================================================================
// Actions
// =============================================================================
enum StreamCreateActionTypes {
  POST_STREAM = "stream/post",
}

interface PostStreamAction extends Action<StreamCreateActionTypes.POST_STREAM> {
  payload: StreamFormData;
}

export const postStream = (formValues: StreamFormData): PostStreamAction => {
  return {
    type: StreamCreateActionTypes.POST_STREAM,
    payload: formValues,
  };
};

type StreamCreateActions = PostStreamAction;
// =============================================================================
// Thunk Dispatcher
// =============================================================================
export const createStream = (
  formValues: StreamFormData
): ThunkAction<Promise<void>, RootState, void, StreamCreateActions> => async (dispatch) => {
  dispatch(postStream(formValues));
};
// ===========================================================================
// Reducer
// ===========================================================================
export const StreamCreateReducer: Reducer<StreamCreateState, StreamCreateActions> = (state = INITIAL_STATE, action) => {
  if (action.type === StreamCreateActionTypes.POST_STREAM) {
    streams.post("/streams", action.payload);
    return { ...state, payload: action.payload };
  }
  return { ...state };
};
