import { Injectable, NotFoundException } from '@nestjs/common';
import ProductRepository from './EmployeeRepository';

@Injectable()
export class EmployeeService {
	constructor(private readonly productRepository: ProductRepository) {}

	async listEmployees() {
		return this.productRepository.getAllEmployees();
	}

	async removeEmployee(id: number): Promise<void> {
		const employeeNoExists = await this.productRepository.getOne(id);

		if (!employeeNoExists) {
			throw new NotFoundException('Employee not found');
		}

		await this.productRepository.deleteEmployee(id);
	}
}
