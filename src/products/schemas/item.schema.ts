import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  colors: [String],
  sizes: [String],
  quantity: Number,
  category: String,
  sku: String,
  features: String,
  specification: String,
  additionalInfo: String,
  sizeGuide: String,
});
