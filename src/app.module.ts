import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/User';
import { UserModule } from './User/UserModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { Employee } from './Employee/Employee';
import { EmployeeModule } from './Employee/EmployeeModule';
=======
import { ProductsController } from './Employee/EmployeeController';
import { ProductsModule } from './Employee/EmployeeModule';
import { Employee } from './Employee/Employee';
>>>>>>> 44ba3b6072d3273ecdd4096d0b4c0694673a164f

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
<<<<<<< HEAD
		EmployeeModule,
=======
		ProductsModule,
>>>>>>> 44ba3b6072d3273ecdd4096d0b4c0694673a164f
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
