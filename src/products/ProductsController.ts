import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { ProductsService } from './ProductsService';
import { ProductDTO } from './ProductDTO';

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

	@Put('/:id')
	async updateProduct(
		@Param('id') id: number,
		@Body() product: ProductDTO,
	): Promise<void> {
		return await this.productsService.updateProduct(id, product);
	}
}
