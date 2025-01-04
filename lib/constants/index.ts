export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "VistaShopVerse";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Best online shopping experience";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.VSV_LATEST_PRODUCTS_LIMIT) || 4;
export const TAX = Number(process.env.NEXT_TAX) || 0.15;

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
  fullName: "John Doe",
  streetAddress: "123 Main St",
  city: "Anytown",
  postalCode: "12345",
  country: "USA",
};
