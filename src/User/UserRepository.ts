import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';

@Injectable()
export class UserRepository {
	async getUsers() {
		return [];
	}

	async saveUser(user: CreateUserDTO): Promise<CreateUserDTO> {
		return user;
	}
}
