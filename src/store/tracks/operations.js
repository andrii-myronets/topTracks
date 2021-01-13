import { server, API_KEY } from "../../API";
import { setTracks } from "./actions";

export const getTracks = () => async (dispatch) => {
    try {
      const { status, data } = await server(`?method=chart.gettoptracks&api_key=${API_KEY}&format=json`);
      if (status === 200) {
        dispatch(setTracks(data.tracks.track));
      }
    } catch (error) {
      console.log(error);
    }
  };