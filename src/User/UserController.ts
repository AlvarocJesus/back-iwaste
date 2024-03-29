import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { User } from './User';
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

	@Put('/:id')
	async updateUser(@Param('id') id: number, @Body() user: User) {
		return await this.userService.updateUser(id, user);
	}

	@Get('/:id')
	async getOneUser(@Param('id') id: number): Promise<User> {
		return await this.userService.getOneUser(id);
	}
}
