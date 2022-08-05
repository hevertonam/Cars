import { Specification } from "../model/Specification";



interface ICreateSpecificationDTO{
    nome: string;
    descricao: string;
}

interface ISpecificationsRepository{

    create({nome, descricao}:ICreateSpecificationDTO):void;
    findByName(nome:string): Specification;
    
 }

 export {ISpecificationsRepository,ICreateSpecificationDTO}; 