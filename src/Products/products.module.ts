import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './Products';
import { ProductsRepository } from './ProductsRepository';

@Module({
	imports: [TypeOrmModule.forFeature([Products])],
	controllers: [ProductsController],
	providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
