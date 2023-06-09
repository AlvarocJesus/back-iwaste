import { Injectable } from '@nestjs/common';
import { Employee } from './Employee';
import { EmployeeRepository } from './EmployeeRepository';
import { EmployeeCreateDto } from './EmployeeCreateDTO';

@Injectable()
export class EmployeeService {
	constructor(private readonly employeeRepository: EmployeeRepository) {}

	async listEmployees() {
		return await this.employeeRepository.getAllEmployees();
	}

	async createEmployee(employee: EmployeeCreateDto): Promise<Employee> {
		return await this.employeeRepository.saveEmployee(employee);
	}
}
