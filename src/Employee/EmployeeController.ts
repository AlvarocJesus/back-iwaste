import { Controller, Get, Delete, Param } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';

@Controller('employee')
export class ProductsController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	async listProducts() {
		return await this.employeeService.listEmployees();
	}

	@Delete('/:id')
	async removeEmployee(@Param('id') id: number) {
		return await this.employeeService.removeEmployee(id);
	}
}
