import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './CreateEmployeeDTO';
import { Employee } from './Employee';
import { EmployeeRepository } from './EmployeeRepository';
import { EmployeeCreateDto } from './EmployeeCreateDTO';

@Injectable()
export class EmployeeService {
	constructor(private readonly employeeRepository: EmployeeRepository) {}

	async listEmployees() {
		return this.employeeRepository.getAllEmployees();
	}

	async updateEmployee(newEmployee: CreateEmployeeDto, id: number) {
		return this.employeeRepository.updateEmployee(newEmployee, id);
	}

	async createEmployee(employee: EmployeeCreateDto): Promise<Employee> {
		return await this.employeeRepository.saveEmployee(employee);
	}
}
