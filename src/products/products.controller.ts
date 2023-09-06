import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './types';
import { CreateProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Product> {
    return this.productsService.findOneProduct(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<Product> {
    return this.productsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: CreateProductDto,
    @Param('id') id,
  ): Promise<Product> {
    return this.productsService.updateProduct(id, updateProductDto);
  }
}
