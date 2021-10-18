import contenedor from "../utils/Container.js";

const getProductByIdService = async (req) => {
  const { id } = req.params;
  const product = await contenedor.getById(parseInt(id));
  return product;
};

export default getProductByIdService;
