import httpService from 'services/httpService';
export const PostOrderSubmit = async (endpoint, authInfo, orderData) => {
  const token = authInfo.data.token;
  const submitResult = { data: null, error: null };
  if (token) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const { data } = await httpService.postAuth(endpoint, orderData, config);
      submitResult.data = data;
    } catch (error) {
      console.error(error);
      submitResult.error = error;
    }
  }
  return submitResult;
};
