import { Repository } from 'typeorm';
import { Products } from './Products';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductsRepository {
	constructor(
		@InjectRepository(Products)
		private productsRepository: Repository<Products>,
	) {}

	async findProducts(): Promise<Products[]> {
		return await this.productsRepository.find();
	}

	async findOneProduct(id: number): Promise<Products> {
		return await this.productsRepository.findOne({ where: { id } });
	}

	async saveProducts(product: Products): Promise<Products> {
		return await this.productsRepository.save(product);
	}
}
