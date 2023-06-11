import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';
import { CreateEmployeeDto } from './CreateEmployeeDTO';

@Controller('employee')
export class ProductsController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	async listProducts() {
		return await this.employeeService.listEmployees();
	}

	@Put('/:id')
	async updateEmployee(
		@Body() newEmployee: CreateEmployeeDto,
		@Param('id') id: number,
	) {
		return this.employeeService.updateEmployee(newEmployee, id);
	}
}
