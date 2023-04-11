import { Body, Controller, Param, Post, Put } from '@nestjs/common';
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

	@Put('/:id')
	async updateUser(@Param('id') id: number, @Body() user: User) {
		return await this.userService.updateUser(id, user);
	}
}
