import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './ProductService';

@Controller('products')
export class ProductsController {
	constructor(private readonly productService: ProductsService) {}

	@Get()
	async listProducts() {
		return await this.productService.listProducts();
	}
}
