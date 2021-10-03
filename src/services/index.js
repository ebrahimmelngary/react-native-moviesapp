import axios from 'axios';

export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_Key = '4f298a53e552283bee957836a529baec';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const makeGetRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'get');
  return response;
};

export const makePostRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'post');
  return response;
};

export const makePutRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}) => {
  const response = await makeRequest(url, data, params, headers, 'put');
  return response;
};

export const makeRequest = async (
  url,
  data = null,
  params = null,
  headers = null,
  method = null,
) => {
  const config = {
    url: `${API_BASE_URL}${url}`,
    method: method || 'get',
  };
  const userToken = 'token';
  if (userToken) {
    config.headers = headers
      ? {Authorization: `Bearer ${userToken}`, ...headers}
      : {Authorization: `Bearer ${userToken}`};
  } else {
    config.headers = headers ? {...headers} : null;
  }
  if (params) {
    config.params = params;
  }
  if (data) {
    config.data = data;
  }

  const response = await axios.request({...config, timeout: 50000});
  return response;
};