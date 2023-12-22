import { ProductsSchema } from '../../models/Products.model';

export const getProducts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const page = parseInt(req.params.page);
    const search = req.query.search ? req.query.search : false;
    const limit = 15;

    const products = await ProductsSchema.find(
      search
        ? {
            $and: [
              { user: userId },
              {
                $or: [
                  { productName: { $regex: new RegExp(search, 'gi') } },
                  { productDescription: { $regex: new RegExp(search, 'gi') } },
                  { productKey: { $regex: search } },
                ],
              },
            ],
          }
        : { user: userId },
    )
      .sort({ added: -1 })
      .limit(limit)
      .skip(page * limit);

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
