import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string(),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  image: Yup.string(),
  labels: Yup.array(),
  score: Yup.number(),
  shortDescription: Yup.string(),
});

export const AvailableProductSchema = ProductSchema.shape({
  count: Yup.number().integer().min(0).required().defined().default(0),
});

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
