import { Controller, Get, Post, Body } from "@nestjs/common";

import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string[] {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() cat: string) {
    this.catsService.create(cat);
    return { message: "Cat created successfully" };
  }
}
