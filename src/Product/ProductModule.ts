import { Module } from '@nestjs/common';
import { ProductsController } from './ProductsController';
import { ProductsService } from './ProductService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './Product';
import ProductRepository from './ProductRepository';

@Module({
	imports: [TypeOrmModule.forFeature([Product])],
	controllers: [ProductsController],
	providers: [ProductsService, ProductRepository],
})
export class ProductsModule {}
