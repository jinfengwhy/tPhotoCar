import Taro from "@tarojs/taro";

class Request {
  static get(url, data = {}) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        data,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }

  static post(url, data = {}) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        data,
        method: "POST",
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }
}

export default Request;
