import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})

export class AppModule {}
