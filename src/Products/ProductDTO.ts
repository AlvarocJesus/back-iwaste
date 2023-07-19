import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductDTO {
	@IsString()
	@IsOptional()
	name?: string;

	@IsInt()
	@IsOptional()
	quantity?: number;

	@IsNumber()
	@IsOptional()
	value?: number;
}
