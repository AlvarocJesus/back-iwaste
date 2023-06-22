import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './Employee';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './CreateEmployeeDTO';
import { EmployeeCreateDto } from './EmployeeCreateDTO';

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

	async saveEmployee(employee: EmployeeCreateDto): Promise<Employee> {
		return await this.repository.save(employee);
	}

	async getOne(id: number) {
		return this.employeeRepository.findOne({ where: { id } });
	}

	async deleteEmployee(id: number): Promise<void> {
		await this.employeeRepository.delete(id);
	}
}
