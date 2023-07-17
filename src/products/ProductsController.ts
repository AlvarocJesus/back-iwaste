import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './ProductsService';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	// @Get()
	// async getAllProducts() {
	// 	return await this.productsService.getAllProducts();
	// }

	@Get('/:id')
	async getOneProducts(@Param('id') id: number) {
		return await this.productsService.getOneProduct(id);
	}
}
