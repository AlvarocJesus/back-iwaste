import { Injectable } from '@nestjs/common';
import ProductRepository from './ProductRepository';

@Injectable()
export class ProductsService {
	constructor(private readonly productRepository: ProductRepository) {}

	async listProducts() {
		return this.productRepository.getAllProducts();
	}
}
