import { Module } from '@nestjs/common';
import { ProductsController } from './EmployeeController';
import { EmployeeService } from './EmployeeService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employee';
<<<<<<< HEAD
import { EmployeeRepository } from './EmployeeRepository';
=======
import ProductRepository from './EmployeeRepository';
>>>>>>> 44ba3b6072d3273ecdd4096d0b4c0694673a164f

@Module({
	imports: [TypeOrmModule.forFeature([Employee])],
	controllers: [ProductsController],
<<<<<<< HEAD
	providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
=======
	providers: [EmployeeService, ProductRepository],
})
export class ProductsModule {}
>>>>>>> 44ba3b6072d3273ecdd4096d0b4c0694673a164f
