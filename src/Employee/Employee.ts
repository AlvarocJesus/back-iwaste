import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
<<<<<<< HEAD
	address: string;
=======
	quantity: number;

	@Column()
	price: number;
>>>>>>> 44ba3b6072d3273ecdd4096d0b4c0694673a164f
}
