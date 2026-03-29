import { GET_PRICE } from "@/constants/price";

const INITIAL_STATE = {
  priceData: null,
  error: null,
};

export default function price(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRICE:
      return {
        ...state,
        priceData: action.payload,
        error: null,
      };
    case `${GET_PRICE}_REJECTED`:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
