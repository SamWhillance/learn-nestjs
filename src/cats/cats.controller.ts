import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiProperty } from "@nestjs/swagger";
import { CatsService } from "./cats.service";

export class CreateCatDto {
  @ApiProperty({ example: "Tom", description: "The name of the cat" })
  name: string;

  @ApiProperty({ example: 3, description: "The age of the cat in years" })
  age: number;
}

@ApiTags("cats") // group endpoints under "cats" in Swagger
@Controller("cats")
export class CatsController {
  constructor(private readonly service: CatsService) {}

  @ApiOperation({ summary: "List all cats" })
  @Get()
  getAll(): CreateCatDto[] {
    return this.service.getAll();
  }

  @ApiOperation({ summary: "Create a new cat" })
  @Post()
  create(@Body() cat: CreateCatDto) {
    this.service.create(cat);
    return { message: "Cat added successfully" };
  }
}
