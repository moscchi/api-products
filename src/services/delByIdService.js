import contenedor from "../utils/Container.js";

const delByIdService = async (req) => {
  const { id } = req.params;
  const products = await contenedor.deleteById(parseInt(id));
  return products;
};

export default delByIdService;
