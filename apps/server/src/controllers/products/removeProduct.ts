import fs from 'fs';

import { uploadsDir } from '../../constants';
import { ProductsSchema } from '../../models/Products.model';
import { UserSchema } from '../../models/Users.model';

export const removeProduct = async (req, res) => {
  try {
    const product = await ProductsSchema.findById(req.params.id);

    const { user, image, _id } = product;

    await UserSchema.findByIdAndUpdate({ _id: user }, { $pull: { products: _id } });

    if (image && image !== 'uploads/default.jpg') {
      const path = `${uploadsDir}${image.slice(image.indexOf('/'))}`;
      const exists = fs.existsSync(path);

      if (exists) fs.unlinkSync(path);
    }

    await product.deleteOne({ _id });

    res.status(201).json({ message: 'Product removed successfuly' });
  } catch (e) {
    res.status(500).json('Server internal error, please Try Again');
  }
};
