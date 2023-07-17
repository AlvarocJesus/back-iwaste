import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './ProductsService';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	async getAllProducts() {
		return await this.productsService.getAllProducts();
	}
}
