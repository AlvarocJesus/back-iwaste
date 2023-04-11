import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './CreateUserDTO';
import { User } from './User';

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	async saveUser(user: CreateUserDTO): Promise<CreateUserDTO & User> {
		return this.usersRepository.save(user);
	}

	async findOneUser(id: number): Promise<User> {
		return this.usersRepository.findOne({ where: { id } });
	}
}
