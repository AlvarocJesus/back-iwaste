import { Injectable, NotFoundException } from '@nestjs/common';
import ProductRepository from './EmployeeRepository';
import { Employee } from './Employee';

@Injectable()
export class EmployeeService {
	constructor(private readonly productRepository: ProductRepository) {}

	async listEmployees() {
		return this.productRepository.getAllEmployees();
	}

	async getProductById(id: number): Promise<Employee> {
		const employee = await this.productRepository.getEmployee(id);

		if (!employee) {
			throw new NotFoundException('Employee not exists');
		}

		return employee;
	}
}
