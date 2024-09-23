import { SCAN } from "@/constants/photo"
import { getTestData } from "@/services/modules/photo"

export const changeTestData = (data) => {
  return {
    type: SCAN,
    payload: data
  }
}

export const getTestAction = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      getTestData(params).then(res => {
        dispatch({ ...changeTestData(res), imgUrl: params.imgUrl });
        resolve(res);
      }).catch(reject);
    });
  }
}
