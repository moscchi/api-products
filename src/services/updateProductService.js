import contenedor from "../utils/Container.js";

const updateProductService = async (req) => {
  const { title, price, thumbnail, id } = req.body;
  const obj = {
    title,
    price,
    thumbnail,
    id,
  };
  console.log(obj);
  const newProduct = await contenedor.update(obj);
  return newProduct;
};

export default updateProductService;
