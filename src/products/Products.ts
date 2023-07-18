import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Products {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	name: string;
	@Column()
	quantity: number;

	@Column({ type: 'decimal', default: 0.0, precision: 2 })
	value: number;
}
