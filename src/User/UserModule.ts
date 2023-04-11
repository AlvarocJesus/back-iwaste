import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User';
import { UserController } from './UserController';
import { UserRepository } from './UserRepository';
import { UserService } from './UserService';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UserService, UserRepository],
	controllers: [UserController],
})
export class UserModule {}
