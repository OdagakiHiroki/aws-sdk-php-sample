import ApiClient from '@/api/settings/axios';

const apiClient = new ApiClient();

const requestLogin = ({ postParams }) => {
  const endPoint = '/login';
  const result = apiClient.post({
    endPoint,
    postParams,
  }).then(
    (res) => res,
  ).catch(
    (err) => err,
  );
  return result;
};

const requestLogout = ({ accessToken = null }) => {
  const endPoint = '/logout';
  const result = apiClient.post({
    endPoint,
    accessToken,
  }).then(
    (res) => res,
  ).catch(
    (err) => err,
  );
  return result;
};

export {
  requestLogin,
  requestLogout,
};
