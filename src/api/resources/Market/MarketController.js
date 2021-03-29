import { ValidationHelper } from "../../helpers";

import MarketValidationChain from './MarketValidationChain';

class MarketController {
  async create(request, response) {
    try {
      await ValidationHelper.hasErrors(request);

      const { marketStatus, price, founds, size } = request.body;

      const status = new MarketValidationChain()
        .checkMarketStatus(marketStatus)
        .checkSizeValue(Number(size), Number(founds))
        .checkPrice(price)
        .validate();

      return response.json({ status });
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default new MarketController();
