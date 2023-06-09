import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';
import { Employee } from './Employee';
import { EmployeeCreateDto } from './EmployeeCreateDTO';

@Controller('employee')
export class ProductsController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	async listProducts() {
		return await this.employeeService.listEmployees();
	}

	@Post()
	async createEmployee(@Body() employee: EmployeeCreateDto): Promise<Employee> {
		console.log({ employee });
		return await this.employeeService.createEmployee(employee);
	}
}
