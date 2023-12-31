import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './types';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private readonly productModel: Model<Product>,
  ) {}
  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async create(item: Product): Promise<Product> {
    const newItem = new this.productModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(id);
  }

  async findOneProduct(id: string) {
    return await this.productModel.findById(id);
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }
}
