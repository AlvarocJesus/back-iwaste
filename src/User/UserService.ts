import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { UserRepository } from './UserRepository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(user: CreateUserDTO): Promise<CreateUserDTO> {
		return this.userRepository.saveUser(user);
	}
}
