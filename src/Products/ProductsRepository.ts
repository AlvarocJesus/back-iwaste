import { Repository } from 'typeorm';
import { Products } from './Products';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductsRepository {
	constructor(
		@InjectRepository(Products)
		private repository: Repository<Products>,
	) {}

	async findProducts() {
		return await this.repository.find();
	}

	async findOneProduct(id: number) {
		return await this.repository.findOne({ where: { id } });
	}

	async deleteProduct(id: number): Promise<void> {
		await this.repository.delete(id);
	}
}
