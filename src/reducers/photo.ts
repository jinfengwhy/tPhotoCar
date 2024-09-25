import { SCAN } from "@/constants/photo";

import mockData from './mockData';

const INITIAL_STATE = {
  // imgUrl: mockData.imgUrl,
  // data: mockData.data,
  imgUrl: '',
  data: null,
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCAN:
      return {
        imgUrl: action.imgUrl,
        data: action.payload,
      };
    default:
      return state;
  }
}
