import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateEspecificationController } from "./CreateEspecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";





const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createEspecificationController = new CreateEspecificationController(createSpecificationUseCase);

export {createEspecificationController};