import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './Product';
import { Repository } from 'typeorm';

export default class ProductRepository {
	constructor(
		@InjectRepository(Product) private productRepository: Repository<Product>,
	) {}

	async getAllProducts() {
		return this.productRepository.find();
	}
}
