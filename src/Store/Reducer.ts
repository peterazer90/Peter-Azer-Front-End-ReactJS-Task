import { RECEIVE_STATIONS, TOGGLE_ID } from './Actions';
import { ACTION_RADIO_INTERFACE } from '../Helpers/Types/Interfaces';

const RADIO_REDUCER = (state:Object, action: ACTION_RADIO_INTERFACE) => {
  switch (action.type) {
    case RECEIVE_STATIONS: return {
      ...state,
      stations: action.payload,
    };
    case TOGGLE_ID: return {
      ...state,
      activeStation: action.payload,
    };
    default: return state;
  }
};
export default RADIO_REDUCER;
