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

	async getEmployee(id: number): Promise<Employee> {
		return await this.employeeRepository.findOne({ where: { id } });
	}
}
