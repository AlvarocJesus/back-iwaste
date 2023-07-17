import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	quantity: number;

	@Column()
	value: number;
}
