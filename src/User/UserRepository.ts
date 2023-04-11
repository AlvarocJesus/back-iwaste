import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { User } from './User';

@Injectable()
export class UserRepository {
	async saveUser(user: CreateUserDTO): Promise<CreateUserDTO> {
		return user;
	}

	async updateUser(id: number, user: User) {
		return this.usersRepository.update(id, user);
	}
}
