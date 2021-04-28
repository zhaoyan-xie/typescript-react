import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { StreamFormData } from "./StreamCreate";
import streams from "../../../api/streams";
import { RootState } from "../../../redux/reducers";

export interface CreateStreamResponseData {
  id: number;
  title: string;
  description: string;
}
export interface StreamCreateState {
  payload: CreateStreamResponseData;
  allStreams: CreateStreamResponseData[];
}

const INITIAL_STATE: StreamCreateState = {
  payload: { id: -1, title: "", description: "" },
  allStreams: [],
};
// =============================================================================
// Actions
// =============================================================================
enum StreamCreateActionTypes {
  POST_STREAM = "stream/post-one",
  FETCH_STREAMS = "stream/fetch-all",
  FETCH_STREAM = "stream/fetch-one",
  DELETE_STREAM = "stream/delete",
  EDIT_STREAM = "stream/edit",
}

interface PostStreamAction extends Action<StreamCreateActionTypes.POST_STREAM> {
  payload: CreateStreamResponseData;
}
interface FetchStreamsAction extends Action<StreamCreateActionTypes.FETCH_STREAMS> {
  payload: CreateStreamResponseData[];
}

const postStream = (resData: CreateStreamResponseData): PostStreamAction => {
  return {
    type: StreamCreateActionTypes.POST_STREAM,
    payload: resData,
  };
};

const saveStreams = (resData: CreateStreamResponseData[]): FetchStreamsAction => {
  return {
    type: StreamCreateActionTypes.FETCH_STREAMS,
    payload: resData,
  };
};
type StreamCreateActions = PostStreamAction | FetchStreamsAction;
// =============================================================================
// Thunk Dispatcher
// =============================================================================

export const createStream = (
  formValues: StreamFormData
): ThunkAction<Promise<void>, RootState, void, StreamCreateActions> => async (dispatch) => {
  const response = await streams.post<CreateStreamResponseData>("/streams", formValues);
  dispatch(postStream(response.data));
};

export const fetchStreams = (): ThunkAction<Promise<void>, RootState, void, StreamCreateActions> => async (
  dispatch
) => {
  const response = await streams.get<CreateStreamResponseData[]>("/streams");
  console.log(">>>>", response);
  dispatch(saveStreams(response.data));
};
// ===========================================================================
// Reducer
// ===========================================================================
export const StreamCreateReducer: Reducer<StreamCreateState, StreamCreateActions> = (state = INITIAL_STATE, action) => {
  if (action.type === StreamCreateActionTypes.POST_STREAM) {
    return { ...state, payload: action.payload };
  }
  if (action.type === StreamCreateActionTypes.FETCH_STREAMS) {
    return { ...state, allStreams: action.payload };
  }
  return { ...state };
};
