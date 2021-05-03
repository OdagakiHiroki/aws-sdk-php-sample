import axios from 'axios';

class ApiClient {
  constructor() {
    this.axiosBase = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }

  get({ endPoint, queryParams = null, accessToken = null }) {
    if (accessToken) {
      this.axiosBase.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    const result = this.axiosBase.get(
      endPoint,
      { params: queryParams || {} },
    ).then(
      (res) => res,
    ).catch(
      (err) => err,
    );
    return result;
  }

  post({ endPoint, postParams = null, accessToken = null }) {
    if (accessToken) {
      this.axiosBase.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    const result = this.axiosBase.post(
      endPoint,
      postParams,
    ).then(
      (res) => res,
    ).catch(
      (err) => err,
    );
    return result;
  }
}

export default ApiClient;
