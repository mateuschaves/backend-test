import { check } from "express-validator";

const postRules = () => [
  check("id")
    .exists()
    .withMessage("Informe o ID")
    .isNumeric()
    .withMessage("ID precisa ser um número"),
  check("marketStatus")
    .exists()
    .withMessage("Informe o status"),
  check("price")
    .exists()
    .withMessage("Informe o preço")
    .isNumeric()
    .withMessage("Preço precisa ser um número"),
  check("founds")
    .exists()
    .withMessage("Informe o valor de founds")
    .isNumeric()
    .withMessage("Founds precisa ser um número"),
  check("size")
    .exists()
    .withMessage("Informe o valor de size")
    .isNumeric()
    .withMessage("Size precisa ser um número")
];

export default { postRules };
