
import { Response, Request } from "express"; 
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateEspecificationController {

    constructor (private createSpecificationUseCase: CreateSpecificationUseCase){}

    handle(request: Request, response: Response){
    
    const {nome, descricao}=request.body;
    
    this.createSpecificationUseCase.execute({nome,descricao});

        return response.status(201).send(); 
    }
}


export {CreateEspecificationController};