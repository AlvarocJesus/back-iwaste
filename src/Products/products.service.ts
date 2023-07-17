import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './ProductsRepository';

@Injectable()
export class ProductsService {
	constructor(private readonly productsRepository: ProductsRepository) {}

	async getOneProduct(id: number) {
		return await this.productsRepository.findOneProduct(id);
	}
}
