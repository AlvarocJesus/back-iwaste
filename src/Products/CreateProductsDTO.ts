import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
	@IsString()
	name: string;

	@IsInt()
	quantity: number;

	@IsNumber()
	value: number;
}
