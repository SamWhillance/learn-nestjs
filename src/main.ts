import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Cats & Dogs API")
    .setDescription("Sam Whillance's cats & dogs API")
    .setVersion("1.0")
    .addTag("dogs")
    .addTag("cats")
    .build();

  // Create the swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup the swagger route to serve the swagger document
  SwaggerModule.setup("swagger", app, document);

  // Start the server
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
