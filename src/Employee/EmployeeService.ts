import { Injectable } from '@nestjs/common';
import ProductRepository from './EmployeeRepository';

@Injectable()
export class EmployeeService {
	constructor(private readonly productRepository: ProductRepository) {}

	async listEmployees() {
		return this.productRepository.getAllEmployees();
	}
}
