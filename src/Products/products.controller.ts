import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get('/:id')
	async getAllProducts(@Param('id') id: number) {
		return await this.productsService.getOneProduct(id);
	}
}
