import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Welcome to Sam Whillance's Cats & Dogs API!";
  }
}
