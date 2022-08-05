
import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./ CreateCategoryUseCase";



class CreateCategoryController{

    constructor (private createCategoryUseCase: CreateCategoryUseCase){}

  handle(request: Request, response: Response){
    const {nome, descricao} = request.body; 

        this.createCategoryUseCase.execute({nome,descricao});

        return response.status(201).send(); 
  }
}

export{CreateCategoryController} 