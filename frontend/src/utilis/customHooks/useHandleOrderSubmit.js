import httpService from 'services/httpService';
export const PostOrderSubmit = async (endpoint, authInfo, orderData) => {
  const token = authInfo.data.token;

  if (token) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const { data: ordersObj } = await httpService.postAuth(
        endpoint,
        orderData,
        config
      );
      return ordersObj;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  return;
};
