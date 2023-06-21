import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/User';
import { UserModule } from './User/UserModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './Employee/Employee';
import { EmployeeModule } from './Employee/EmployeeModule';

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
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
