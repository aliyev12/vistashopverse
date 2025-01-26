export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "VistaShopVerse";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Best online shopping experience";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.VSV_LATEST_PRODUCTS_LIMIT) || 4;
export const TAX = Number(process.env.NEXT_TAX) || 0.15;

/**
 * List of payment methods.
 */
export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Stripe", "CashOnDelivery"];

/**
 * Default payment method.
 */
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";

/**
 * Minimum purchase amount to get free shipping.
 * @default 100
 */
export const SHIPPING_MIN = Number(process.env.NEXT_SHIPPING_MIN) || 100;

/**
 * Default shipping cost for purchases less than $100
 * @default 10
 */
export const SHIPPING_DEFAULT = Number(process.env.NEXT_SHIPPING_DEFAULT) || 10;

export const signInDefaultValues = {
  email: "admin@example.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 2;

export const productsDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: "0",
  rating: "0",
  numReviews: "0",
  isFeatured: false,
  banner: null,
};
