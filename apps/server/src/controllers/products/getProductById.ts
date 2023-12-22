import { ProductsSchema } from '../../models/Products.model';

export const getProductById = async (req, res) => {
  try {
    const product = await ProductsSchema.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ error: 'Server internal error, Please Try Again' });
  }
};
