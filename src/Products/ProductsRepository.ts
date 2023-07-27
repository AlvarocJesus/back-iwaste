import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDTO } from './ProductDTO';
import { CreateProductDTO } from './CreateProductsDTO';
import { Products } from './Products';

export class ProductsRepository {
	constructor(
		@InjectRepository(Products)
		private repository: Repository<Products>,
	) {}

	async findProducts(): Promise<Products[]> {
		return await this.repository.find();
	}

	async findOneProduct(id: number): Promise<Products> {
		return await this.repository.findOne({ where: { id } });
	}

	async updateProduct(id: number, product: ProductDTO): Promise<void> {
		await this.repository.update(id, product);
	}

	async saveProducts(product: CreateProductDTO): Promise<Products> {
		return await this.repository.save(product);
	}

	async deleteProduct(id: number): Promise<void> {
		await this.repository.delete(id);
	}
}
