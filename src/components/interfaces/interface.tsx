export interface UserType {
  city?: string | undefined;
  email?: string | undefined;
  uid?: string | undefined;
  postalCode?: string | undefined;
  firstName?: string | undefined;
  number?: string | undefined;
  country?: string | undefined;
  region?: string | undefined;
  streetAddress?: string | undefined;
  lastName?: string | undefined;
}

export interface ContactType {
  date?: number | undefined;
  email?: string | undefined;
  fName?: string | undefined;
  lName?: string | undefined;
  message?: string | undefined;
  phone?: string | undefined;
  subject?: string | undefined;
}

export interface ProductType {
  description?: string | undefined;
  imgUrlList?: string[] | undefined[];
  name?: string | undefined;
  parentCat?: string | undefined;
  price?: string | undefined;
  quantity?: string | undefined;
  salesPrice?: string | undefined;
  status?: string | undefined;
  thumbnail?: string | undefined;
  slug?: string | undefined;
}

export interface ReviewType {
  description?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  orderNumber?: string | undefined;
  productId?: string | undefined;
  rating?: number | undefined;
  reviewId?: string | undefined;
}

export interface OrderProductType {
  quantity?: number | undefined;
  price?: string | undefined;
  name?: string | undefined;
  id?: string | undefined;
  size?: string | undefined;
  img?: string | undefined;
  firstName?: string | undefined;
  reviewId?: string | undefined | null;
}

export interface OrderType {
  streetAddress?: string | undefined;
  totalPrice?: number | undefined;
  uid?: string | undefined;
  city?: string | undefined;
  phoneNumber?: string | undefined;
  orderNumber?: string | undefined;
  orderDate?: number | undefined;
  region?: string | undefined;
  postalCode?: string | undefined;
  status?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  country?: string | undefined;
  product?: OrderProductType[];
}
