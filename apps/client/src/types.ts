export interface LoginPayloadType {
  email: string;
  password: string;
}

export interface RegisterPayloadType extends LoginPayloadType {
  fullName: string;
  confirmPassword: string;
}

export interface RegisterPasswordFields {
  color: string;
  bgColor: string;
}

export interface ProductItem {
  added: string;
  discount: boolean;
  image: string;
  price: string;
  productDescription: string;
  productKey: string;
  productName: string;
  stock: string;
  __v: number;
  _id: string;
}

export interface UserType {
  fullName: string;
  email: string;
  userId: string;
}
