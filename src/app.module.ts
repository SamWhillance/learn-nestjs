import { AppController } from "./app.controller";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { DogsController } from "./dogs/dogs.controller";
import { DogsService } from "./dogs/dogs.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsController],
  providers: [DogsService, CatsService],
})
export class AppModule {}
