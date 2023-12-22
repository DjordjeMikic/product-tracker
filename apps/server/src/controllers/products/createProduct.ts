/* @typescript-eslint/no-explicit-any */
import { ProductsSchema } from '../../models/Products.model';
import { UserSchema } from '../../models/Users.model';

export const createProduct = async (req, res) => {
  try {
    const arr = req.body.info.toString().split(',');
    const info: any = {};

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        info[arr[i - 1]] = arr[i];
      }
    }

    const user = await UserSchema.findById(info.userId);

    const newProduct = new ProductsSchema({
      productName: info.productName,
      productKey: info.productKey,
      productDescription: info.productDescription,
      stock: info.stock,
      price: info.price,
      discount: info.discount,
      image: `uploads/${req.name ? req.name : 'default.jpg'}`,
      user: user._id,
    });

    await newProduct.save();

    user.products.push(newProduct._id);

    await user.save();

    res.status(201).json({ message: 'Product created successfully' });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
