import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './ProductsRepository';
import { Products } from './Products';
import { CreateProductDTO } from './CreateProductsDTO';

@Injectable()
export class ProductsService {
	constructor(private readonly productsRepository: ProductsRepository) {}

	async getAllProducts(): Promise<Products[]> {
		return await this.productsRepository.findProducts();
	}

	async getOneProduct(id: number): Promise<Products> {
		const product = await this.productsRepository.findOneProduct(id);

		if (!product) {
			throw new NotFoundException('Product not found');
		}

		return product;
	}

	async saveProducts(product: CreateProductDTO): Promise<Products> {
		const productSaved = await this.productsRepository.saveProducts(product);

		if (!productSaved) {
			throw new NotFoundException('Product not found');
		}

		return productSaved;
	}
}
