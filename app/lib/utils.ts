import { Camera, Lense } from "./db/schema";

export const formatCurrency = (amount: number) => {
  return (amount * 1).toLocaleString('en-US', {
    currency: 'USD',
  });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isCamera(obj: any): obj is Camera {
  return obj && typeof obj === "object" && "megapixels" in obj
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isLense(obj: any): obj is Lense {
  return obj && typeof obj === "object" && "minfl" in obj
};