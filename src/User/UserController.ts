import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO';
import { UserService } from './UserService';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async createUser(@Body() user: CreateUserDTO): Promise<CreateUserDTO> {
		return await this.userService.createUser(user);
	}
}
