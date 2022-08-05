import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    nome: string;
    descricao: string;
}

class CreateSpecificationUseCase
 {

    constructor(private specificatiosRepository: ISpecificationsRepository){

    }

    execute({nome, descricao}:IRequest):void{

        const specificationAlreadyExists = this.specificatiosRepository.findByName(nome);

        if (specificationAlreadyExists){
            throw new Error ("Specification AlreadyExists")
        }

        this.specificatiosRepository.create({
            nome,
            descricao, 
        })

    }
}

export {CreateSpecificationUseCase
 };