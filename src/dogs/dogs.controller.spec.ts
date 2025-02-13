import { Test, TestingModule } from "@nestjs/testing";

import { DogsController } from "./dogs.controller";
import { DogsService } from "./dogs.service";

describe("DogsController", () => {
  let controller: DogsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService],
    }).compile();
    controller = app.get<DogsController>(DogsController);
  });

  describe("getAll", () => {
    it("should return 'Hello World!'", () => {
      expect(controller.getAll()).toBe(["Archie", "Bonnie", "Clyde"]);
    });
  });
});
