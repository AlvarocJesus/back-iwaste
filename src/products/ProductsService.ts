import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './ProductsRepository';

@Injectable()
export class ProductsService {
	constructor(private readonly productsRepository: ProductsRepository) {}

	async getAllProducts() {
		return await this.productsRepository.findProducts();
	}

	async getOneProduct(id: number) {
		const product = await this.productsRepository.findOneProduct(id);

		if (!product) {
			throw new NotFoundException('Product not found');
		}

		return product;
	}

	async removeProduct(id: number): Promise<void> {
		await this.getOneProduct(id);

		return await this.productsRepository.deleteProduct(id);
	}
}
