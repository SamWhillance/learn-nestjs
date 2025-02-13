import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiProperty } from "@nestjs/swagger";
import { DogsService } from "./dogs.service";

export class CreateDogDto {
  @ApiProperty({ example: "Fido", description: "The name of the dog" })
  name: string;

  @ApiProperty({ example: 3, description: "The age of the dog in years" })
  age: number;
}

@ApiTags("dogs")
@Controller("dogs")
export class DogsController {
  constructor(private readonly service: DogsService) {}

  @ApiOperation({ summary: "List all dogs" })
  @Get()
  getAll(): CreateDogDto[] {
    return this.service.getAll();
  }

  @ApiOperation({ summary: "Create a new dog" })
  @Post()
  create(@Body() dog: CreateDogDto) {
    this.service.create(dog);
    return { message: "Dog added successfully" };
  }
}
