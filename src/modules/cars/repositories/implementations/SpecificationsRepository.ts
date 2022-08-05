import { Specification } from "../../model/Specification";
import { 
    ISpecificationsRepository,
    ICreateSpecificationDTO } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
  
    private specifications: Specification[];        

    
    create({ nome, descricao }: ICreateSpecificationDTO): void {
        const specification = new Specification(); 

        Object.assign(specification,{
            nome,
            descricao,
            data_criacao: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(nome: string):   Specification {
        const specification = this.specifications.find(specification=>specification.nome===nome);
        return specification;   
    };
  

}

export {SpecificationsRepository}; 