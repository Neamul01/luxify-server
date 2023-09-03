export type Product = {
  id?: string;
  name: string;
  description: string;
  colors: Array<string>;
  rating?: number;
  sizes: Array<string>;
  quantity: number;
  category: string;
  sku: string;
  features: string;
  specification?: string;
  additionalInfo?: string;
  sizeGuide?: string;
  reviews?: Review[];
};

export type Review = {
  name: string;
  comment: string;
  email: string;
  rating: number | string;
};
