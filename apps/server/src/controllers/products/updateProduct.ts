import { ProductsSchema } from '../../models/Products.model';

export const updateProduct = async (req, res) => {
  const { productName, productKey, productDescription, stock, discount, price } =
    req.body;

  try {
    const productUpdated = await ProductsSchema.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          productName,
          productKey,
          productDescription,
          stock,
          discount,
          price,
        },
      },
    );

    if (parseInt(stock) === 0) {
      req.event.emit('emptyStock', productUpdated.productKey);
    }

    res.status(201).json({ message: 'Product updated' });
  } catch (e) {
    res.status(500).json('Some error. Try Again');
  }
};
