import { Injectable } from '@nestjs/common';
import ProductRepository from './EmployeeRepository';
import { Employee } from './Employee';

@Injectable()
export class EmployeeService {
	constructor(private readonly productRepository: ProductRepository) {}

	async listEmployees() {
		return this.productRepository.getAllEmployees();
	}

	async createEmployee(employee: Employee) {
		return this.productRepository.saveEmployee(employee);
	}
}
