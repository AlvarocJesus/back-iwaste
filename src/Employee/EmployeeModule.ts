import { Module } from '@nestjs/common';
import { ProductsController } from './EmployeeController';
import { EmployeeService } from './EmployeeService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employee';
import { EmployeeRepository } from './EmployeeRepository';

@Module({
	imports: [TypeOrmModule.forFeature([Employee])],
	controllers: [ProductsController],
	providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
