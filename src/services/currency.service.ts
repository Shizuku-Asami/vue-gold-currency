import axios from "axios";
import { AxiosResponse } from "axios";

const config = {
  headers: {
    "x-access-token": process.env.VUE_APP_API_KEY,
    "Content-Type": "application/json",
  },
};

export const MetalCurrencyService = {
  /**
   *
   * @param {string} metal - The code of metal to be converted. possible values: ["XAU", "XAG", "XPT", "XPD"].
   * @param {string} currency - The code of target currency. possible values: ["USD", "AUD", "GBP", "EUR", "CHF", "CAD", "JPY", "KRW", "INR", "CNY", "ZAR", "THB", "SGD", "BTC", "HKD", "CZK", "RUB", "PLN", "MYR", "SED", "KWD", "EGP", "OMR", "SAR", "MXN", "XAG"].
   * @returns {Promise} Promise containing JSON Response that descripes the relationship between the metal and the currency.
   */
  getRealTimeMetalPrice(
    metal: string,
    currency: string
  ): Promise<AxiosResponse> {
    const url = process.env.VUE_APP_API_BASE_URL + `${metal}/` + `${currency}/`;
    return axios.get(url, config);
  },
};
