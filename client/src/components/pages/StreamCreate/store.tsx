import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import streams from "../../../api/streams";
import { RootState } from "../../../redux/reducers";

// =============================================================================
// State
// =============================================================================

// =============================================================================
// Thunk Dispatcher
// =============================================================================
export const createStream = (formValues: FormData): ThunkAction<Promise<void>, RootState, void, any> => async () => {
  streams.post("/streams", formValues);
};
