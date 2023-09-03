export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly colors: Array<string>;
  readonly sizes: Array<string>;
  readonly quantity: number;
  readonly category: string;
  readonly sku: string;
  readonly features: string;
  readonly specification?: string;
  readonly additionalInfo?: string;
  readonly sizeGuide?: string;
  readonly images: Array<string>;
}
