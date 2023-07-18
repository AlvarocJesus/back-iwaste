import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO } from './CreateProductsDTO';
import { Products } from './Products';

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

	async saveProducts(product: CreateProductDTO): Promise<Products> {
		return await this.productsRepository.save(product);
	}
}
