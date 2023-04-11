import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { User } from './User';
import { UserRepository } from './UserRepository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(user: CreateUserDTO): Promise<CreateUserDTO> {
		return this.userRepository.saveUser(user);
	}

	async updateUser(id: number, user: User) {
		return this.userRepository.updateUser(id, user);
	}
}
