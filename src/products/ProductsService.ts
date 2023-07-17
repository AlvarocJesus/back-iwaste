import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './ProductsRepository';

@Injectable()
export class ProductsService {
	constructor(private readonly productsRepository: ProductsRepository) {}

	async getAllProducts() {
		return await this.productsRepository.findProducts();
	}
}
