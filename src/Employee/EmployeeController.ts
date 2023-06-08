import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './EmployeeService';

@Controller('employee')
export class ProductsController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	async listProducts() {
		return await this.employeeService.listEmployees();
	}
}
