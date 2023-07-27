import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './ProductsService';
import { Products } from './Products';
import { CreateProductDTO } from './CreateProductsDTO';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	async getAllProducts(): Promise<Products[]> {
		return await this.productsService.getAllProducts();
	}

	@Get('/:id')
	async getOneProducts(@Param('id') id: number): Promise<Products> {
		return await this.productsService.getOneProduct(id);
	}

	@Post()
	async saveProducts(@Body() product: CreateProductDTO): Promise<Products> {
		return this.productsService.saveProducts(product);
	}
}
