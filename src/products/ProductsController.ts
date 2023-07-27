import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ProductsService } from './ProductsService';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	async getAllProducts() {
		return await this.productsService.getAllProducts();
	}

	@Get('/:id')
	async getOneProducts(@Param('id') id: number) {
		return await this.productsService.getOneProduct(id);
	}

	@Delete('/:id')
	async removeProduct(@Param('id') id: number): Promise<void> {
		return await this.productsService.removeProduct(id);
	}
}
