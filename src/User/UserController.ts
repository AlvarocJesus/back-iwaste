import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { UserService } from './UserService';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	async listUsers() {
		return await this.userService.listUsers();
	}

	@Post()
	async createUser(@Body() user: CreateUserDTO): Promise<CreateUserDTO> {
		return await this.userService.createUser(user);
	}
}
