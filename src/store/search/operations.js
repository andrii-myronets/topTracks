import { server, API_KEY } from "../../API";
import { setSearchList } from "./actions";

export const getSearchList = (track) => async (dispatch) => {
    try {
      const { status, data } = await server(`?method=track.search&track=${track}&api_key=${API_KEY}&format=json`);
      if (status === 200) {
        dispatch(setSearchList(data.results.trackmatches.track));
      }
    } catch (error) {
      console.log(error);
    }
  };
