import { Module } from '@nestjs/common';
import { ProductsController } from './ProductsController';
import { ProductsService } from './ProductsService';
import { ProductsRepository } from './ProductsRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './Products';

@Module({
	imports: [TypeOrmModule.forFeature([Products])],
	controllers: [ProductsController],
	providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
