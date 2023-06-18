import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';
import { Employee } from './Employee';

@Controller('employee')
export class ProductsController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	async listProducts() {
		return await this.employeeService.listEmployees();
	}

	@Get('/:id')
	async getProductById(@Param('id') id: number): Promise<Employee> {
		return await this.employeeService.getProductById(id);
	}
}
