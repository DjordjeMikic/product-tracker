import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const typeOfData = {
  type: String,
  required: true,
};

const ProductModel = new Schema({
  productName: typeOfData,
  productDescription: {
    type: String,
    default: 'No description for this product',
  },
  image: typeOfData,
  productKey: typeOfData,
  discount: {
    type: Boolean,
    default: false,
  },
  stock: typeOfData,
  price: typeOfData,
  added: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

export const ProductsSchema = mongoose.model('products', ProductModel);
