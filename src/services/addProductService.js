import contenedor from "../utils/Container.js";

const addProductService = async (req) => {
  const { title, price, thumbnail } = req.body;
  const obj = {
    title,
    price,
    thumbnail,
    id: 0,
  };
  const newProduct = await contenedor.save(obj);
  return newProduct;
};

export default addProductService;
