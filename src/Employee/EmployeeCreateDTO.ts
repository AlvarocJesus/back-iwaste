import { IsString } from 'class-validator';

export class EmployeeCreateDto {
	@IsString()
	name: string;

	@IsString()
	address: string;
}
