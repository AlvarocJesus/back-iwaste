import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../src/User/UserController';

describe('UserController', () => {
	let controller: UserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
		}).compile();

		controller = module.get<UserController>(UserController);
	});

	describe('GET /user/:id', () => {
		it('should return detail user when user by id 1 exists', () => {
			expect(controller.getOneUser(1)).toEqual('Hello World!');
		});
	});
});
