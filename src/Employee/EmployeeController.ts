import { CreateEmployeeDto } from './CreateEmployeeDTO';
import {
	Body,
	Controller,
	Get,
	Post,
	Param,
	Put,
	Delete,
} from '@nestjs/common';
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

	@Get('/:id')
	async getProductById(@Param('id') id: number): Promise<Employee> {
		return await this.employeeService.getProductById(id);
	}

	@Delete('/:id')
	async removeEmployee(@Param('id') id: number): Promise<void> {
		return await this.employeeService.removeEmployee(id);
	}

	@Put('/:id')
	async updateEmployee(
		@Body() newEmployee: CreateEmployeeDto,
		@Param('id') id: number,
	) {
		return this.employeeService.updateEmployee(newEmployee, id);
	}

	@Post()
	async createEmployee(@Body() employee: EmployeeCreateDto): Promise<Employee> {
		return await this.employeeService.createEmployee(employee);
	}
}
