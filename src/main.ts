import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('NestJS API')
		.setDescription('The NestJS API description')
		.setVersion('1.0')
		.setBasePath('')
		.addTag('User')
		.addTag('Employee')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);

	await app.listen(3000);
}
bootstrap();
