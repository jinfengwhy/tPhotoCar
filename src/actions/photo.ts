import { SCAN } from "@/constants/photo"
import { getScanResultData } from "@/services/modules/photo"

export const changeTestData = (data) => {
  return {
    type: SCAN,
    payload: data
  }
}

export const getScanResultAction = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      getScanResultData(params).then(res => {
        dispatch({ ...changeTestData(res), imgUrl: params.imgUrl });
        resolve(res);
      }).catch(reject);
    });
  }
}
