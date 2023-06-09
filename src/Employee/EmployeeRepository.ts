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

	async saveEmployee(employee: Employee) {
		return this.employeeRepository.create(employee);
	}
}