import contenedor from '../utils/Container.js';

const getProductsService = async () => {
    const products = await contenedor.getAll();
    return products;
};


export default getProductsService;