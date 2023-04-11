import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { UserRepository } from './UserRepository';
import { UserService } from './UserService';

@Module({
	providers: [UserService, UserRepository],
	controllers: [UserController],
})
export class UserModule {}
