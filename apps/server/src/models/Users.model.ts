import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const typeOfData = {
  type: String,
  required: true,
};

const Users = new Schema({
  fullName: typeOfData,
  email: {
    ...typeOfData,
    unique: true,
  },
  password: {
    ...typeOfData,
    min: 4,
  },
  verifyToken: {
    type: String,
    default: null,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
  ],
});

export const UserSchema = mongoose.model('users', Users);
