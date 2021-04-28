import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { StreamFormData } from ".";
import streams from "../../../api/streams";
import { RootState } from "../../../redux/reducers";

export interface CreateStreamResponseData {
  id: number;
  title: string;
  description: string;
}
export interface StreamCreateState {
  payload: CreateStreamResponseData;
}

const INITIAL_STATE: StreamCreateState = {
  payload: { id: -1, title: "", description: "" },
};
// =============================================================================
// Actions
// =============================================================================
enum StreamCreateActionTypes {
  POST_STREAM = "stream/post",
}

interface PostStreamAction extends Action<StreamCreateActionTypes.POST_STREAM> {
  payload: CreateStreamResponseData;
}

export const postStream = (resData: CreateStreamResponseData): PostStreamAction => {
  return {
    type: StreamCreateActionTypes.POST_STREAM,
    payload: resData,
  };
};

type StreamCreateActions = PostStreamAction;
// =============================================================================
// Thunk Dispatcher
// =============================================================================

export const createStream = (
  formValues: StreamFormData
): ThunkAction<Promise<void>, RootState, void, StreamCreateActions> => async (dispatch) => {
  const response = await streams.post<CreateStreamResponseData>("/streams", formValues);
  dispatch(postStream(response.data));
};
// ===========================================================================
// Reducer
// ===========================================================================
export const StreamCreateReducer: Reducer<StreamCreateState, StreamCreateActions> = (state = INITIAL_STATE, action) => {
  if (action.type === StreamCreateActionTypes.POST_STREAM) {
    return { ...state, payload: action.payload };
  }
  return { ...state };
};
