import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/UserModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db.sqlite',
			entities: [],
			synchronize: true,
		}),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
