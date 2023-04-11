import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { User } from './User';
import { UserService } from './UserService';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async createUser(@Body() user: CreateUserDTO): Promise<CreateUserDTO> {
		return await this.userService.createUser(user);
	}

	@Get('/:id')
	async getOneUser(@Param('id') id: number): Promise<User> {
		return await this.userService.getOneUser(id);
	}
}
