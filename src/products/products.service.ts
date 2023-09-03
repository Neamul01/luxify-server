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
}
