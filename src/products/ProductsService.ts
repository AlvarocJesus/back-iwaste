import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './ProductsRepository';
import { Products } from './Products';
import { ProductDTO } from './ProductDTO';

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

	async updateProduct(id: number, product: ProductDTO): Promise<void> {
		await this.productsRepository.updateProduct(id, product);
	}
}
