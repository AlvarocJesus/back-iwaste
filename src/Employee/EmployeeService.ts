import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './EmployeeRepository';
import { CreateEmployeeDto } from './CreateEmployeeDTO';

@Injectable()
export class EmployeeService {
	constructor(private readonly employeeRepository: EmployeeRepository) {}

	async listEmployees() {
		return this.employeeRepository.getAllEmployees();
	}

	async updateEmployee(newEmployee: CreateEmployeeDto, id: number) {
		return this.employeeRepository.updateEmployee(newEmployee, id);
	}
}
