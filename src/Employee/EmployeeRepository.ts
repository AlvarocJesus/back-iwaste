import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './Employee';
import { Repository } from 'typeorm';
import { EmployeeCreateDto } from './EmployeeCreateDTO';

export class EmployeeRepository {
	constructor(
		@InjectRepository(Employee)
		private employeeRepository: Repository<Employee>,
	) {}

	async getAllEmployees() {
		return await this.employeeRepository.find();
	}

	async saveEmployee(employee: EmployeeCreateDto): Promise<Employee> {
		return await this.employeeRepository.save(employee);
	}
}
