import { ValidationHelper } from "../helpers";

class HomeController {
  async hello(req, res) {
    try {
      await ValidationHelper.hasErrors(req);
      return res.json({ message: "Hello World !" });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new HomeController();
