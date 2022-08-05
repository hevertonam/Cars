import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    nome: string;
    descricao: string;
}

class  CreateCategoryUseCase {

    constructor (private categoriesRepository : ICategoriesRepository){
    }

    execute({nome, descricao}:IRequest){
        
        const categoriesAlreadyExists = this.categoriesRepository.findByName(nome);

        if(categoriesAlreadyExists){

        throw new Error("modelsAlreadyExists!");    

        }
     
        this.categoriesRepository.create({nome, descricao});
    }
}



export { CreateCategoryUseCase}