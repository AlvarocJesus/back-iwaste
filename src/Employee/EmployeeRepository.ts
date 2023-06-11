import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './Employee';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './CreateEmployeeDTO';

export class EmployeeRepository {
	constructor(
		@InjectRepository(Employee)
		private repository: Repository<Employee>,
	) {}

	async getAllEmployees() {
		return this.repository.find();
	}

	async updateEmployee(newEmployee: CreateEmployeeDto, id: number) {
		return this.repository.update(id, newEmployee);
	}
}
