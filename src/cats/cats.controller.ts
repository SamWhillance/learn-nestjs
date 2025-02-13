import { Body, Controller, Get, Post } from "@nestjs/common";

import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string[] {
    return this.catsService.findAll();
  }

  @Get("add")
  create() {
    this.catsService.create("Sam");
    return { message: "Cat created successfully" };
  }
}
