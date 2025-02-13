import { CreateDogDto } from "./dogs.controller";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DogsService {
  private readonly dogs: CreateDogDto[] = [
    { name: "Archie", age: 9 },
    { name: "Bonnie", age: 8 },
    { name: "Clyde", age: 3 },
  ];

  getAll(): CreateDogDto[] {
    return this.dogs;
  }

  create(dog: CreateDogDto) {
    this.dogs.push(dog);
  }
}
