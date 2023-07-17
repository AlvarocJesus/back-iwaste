import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/User';
import { UserModule } from './User/UserModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './Employee/Employee';
import { EmployeeModule } from './Employee/EmployeeModule';
import { ProductsModule } from './products/products.module';
import { ProductsControllerController } from './products-controller/products-controller.controller';
import { ControllerModule } from './service/controller/controller.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db.sqlite',
			entities: [User, Employee],
			synchronize: true,
			logging: true,
		}),
		UserModule,
		EmployeeModule,
		ProductsModule,
		ControllerModule,
	],
	controllers: [AppController, ProductsControllerController],
	providers: [AppService],
})
export class AppModule {}
