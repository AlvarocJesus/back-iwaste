import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';
import { Employee } from './Employee';

@Controller('employee')
export class ProductsController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	async listProducts() {
		return await this.employeeService.listEmployees();
	}

	@Post()
	async createEmployee(@Body() employee: Employee) {
		return this.employeeService.createEmployee(employee);
	}
}
