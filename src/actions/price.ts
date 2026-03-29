import { getPriceData } from "@/services/modules/price"
import { GET_PRICE } from "@/constants/price"

export const getPriceAction = params => {
  return (dispatch, getState) => {
    // 触发 PENDING 状态
    dispatch({
      type: `${GET_PRICE}_PENDING`
    });

    return new Promise((resolve, reject) => {
      getPriceData(params).then(res => {
        dispatch({
          type: GET_PRICE,
          payload: res
        });
        resolve(res);
      }).catch(err => {
        // 触发 REJECTED 状态
        dispatch({
          type: `${GET_PRICE}_REJECTED`,
          payload: err
        });
        reject(err);
      });
    });
  }
}
