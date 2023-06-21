import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './Employee';
import { Repository } from 'typeorm';

export default class ProductRepository {
	constructor(
		@InjectRepository(Employee)
		private employeeRepository: Repository<Employee>,
	) {}

	async getAllEmployees() {
		return this.employeeRepository.find();
	}

	async deleteEmployee(id: number) {
		return await this.employeeRepository.delete(id);
	}
}
