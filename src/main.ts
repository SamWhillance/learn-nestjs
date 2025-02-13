import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();
  app.setGlobalPrefix("api", {
    exclude: ["swagger"],
  });

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
  SwaggerModule.setup("api-docs", app, document, {
    customSiteTitle: "Cats & Dogs API Documentation",
    customfavIcon: "/favicon.ico",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
    ],
    customCssUrl: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    ],
  });

  // Start the server
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
