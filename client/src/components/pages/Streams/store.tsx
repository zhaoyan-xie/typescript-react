import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { StreamFormData } from "./StreamCreate";
import streams from "../../../api/streams";
import { RootState } from "../../../redux/reducers";

interface CreateStreamResponseData {
  id: number;
  title: string;
  description: string;
}
interface Stream {
  [id: number]: CreateStreamResponseData;
}
export interface StreamCreateState {
  stream: Stream;
  allStreams: Stream;
}

const INITIAL_STATE: StreamCreateState = {
  stream: {},
  allStreams: {},
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
interface FetchStreamAction extends Action<StreamCreateActionTypes.FETCH_STREAM> {
  payload: CreateStreamResponseData;
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

const saveStream = (resData: CreateStreamResponseData): FetchStreamAction => {
  return {
    type: StreamCreateActionTypes.FETCH_STREAM,
    payload: resData,
  };
};
type StreamCreateActions = PostStreamAction | FetchStreamsAction | FetchStreamAction;
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
  dispatch(saveStreams(response.data));
};

export const fetchStream = (id: number): ThunkAction<Promise<void>, RootState, void, StreamCreateActions> => async (
  dispatch
) => {
  const response = await streams.get<CreateStreamResponseData>(`/streams/${id}`);
  dispatch(saveStream(response.data));
};
// ===========================================================================
// Reducer
// ===========================================================================
export const StreamCreateReducer: Reducer<StreamCreateState, StreamCreateActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StreamCreateActionTypes.POST_STREAM:
    case StreamCreateActionTypes.FETCH_STREAM:
      return { ...state, stream: { [action.payload.id]: action.payload } };
    case StreamCreateActionTypes.FETCH_STREAMS:
      const allStreams: Stream = {};
      for (let stream of action.payload) {
        allStreams[stream.id] = stream;
      }
      return { ...state, allStreams };
    default:
      return { ...state };
  }
};
