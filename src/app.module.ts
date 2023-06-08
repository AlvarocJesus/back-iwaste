import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/User';
import { UserModule } from './User/UserModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './Product/ProductsController';
import { ProductsModule } from './Product/ProductModule';
import { Product } from './Product/Product';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db.sqlite',
			entities: [User, Product],
			synchronize: true,
			logging: true,
		}),
		UserModule,
		ProductsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
