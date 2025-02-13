import { CreateCatDto } from "./cats.controller";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [
    { name: "Tom", age: 3 },
    { name: "Jerry", age: 2 },
  ];

  getAll(): CreateCatDto[] {
    return this.cats;
  }

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }
}
