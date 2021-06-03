import API_ENDPOINT from '../globals/api-endpoints';
import CONFIG from '../globals/config';

class Service {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async addCustomerReview(payload) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_CUSTOMER_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.X_AUTH_TOKEN,
        },
        body: JSON.stringify(payload),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async searchRestaurant(param) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(param));
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}

export default Service;
