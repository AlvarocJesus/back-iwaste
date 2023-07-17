import { Repository } from 'typeorm';
import { Products } from './Products';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductsRepository {
	constructor(
		@InjectRepository(Products)
		private productsRepository: Repository<Products>,
	) {}

	async findOneProduct(id: number) {
		return await this.productsRepository.findOne({ where: { id } });
	}
}
