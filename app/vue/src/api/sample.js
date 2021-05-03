import ApiClient from '@/api/settings/axios';

const apiClient = new ApiClient();

const fetchSampleText = ({ accessToken = null }) => {
  const endPoint = '/sample';
  const result = apiClient.get({
    endPoint,
    accessToken,
  }).then(
    (res) => res,
  ).catch(
    (err) => err,
  );
  return result;
};

export default fetchSampleText;
