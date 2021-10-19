import getProductsService from "../services/getProductsService.js";
import getProductByIdService from "../services/getProductByIdService.js";
import addProductService from "../services/addProductService.js";
import updateProductService from "../services/updateProductService.js";
import delByIdService from "../services/delByIdService.js";

const getProducts = async (_, res) => {
  const products = await getProductsService();
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await getProductByIdService(req);
  res.json(product);
};

const addProduct = async (req, res) => {
  const newProduct = await addProductService(req);
  res.json(newProduct);
};

const updateProduct = async (req, res) => {
  const updateProduct = await updateProductService(req);
  res.json(updateProduct);
};

const deleteProduct = async (req, res) => {
  const deleteProduct = await delByIdService(req);
  res.json(deleteProduct);
};

export {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
