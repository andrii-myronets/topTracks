import { server, API_KEY } from "../../API";
import { setAtist } from "./actions";

export const getArtist = (artist) => async (dispatch) => {
    try {
      const { status, data } = await server(`?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`);
      if (status === 200) {
        dispatch(setAtist(data.artist));
      }
    } catch (error) {
      console.log(error);
    }
  };