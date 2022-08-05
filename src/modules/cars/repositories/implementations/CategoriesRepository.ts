import {Category} from "../../model/Category";
import { ICategoriesRepository,ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository
{

private categories : Category[];

private static INSTANCE: CategoriesRepository;

 
private constructor(){
    this.categories = [];
}

public static getInstance():CategoriesRepository{
    
    if(!CategoriesRepository.INSTANCE){
        CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
}

    create({nome,descricao}:ICreateCategoryDTO) : void{
    const category = new Category ();
                
    Object.assign(category,{
    nome,
    descricao,
    data_criacao: new Date(),
    });

this.categories.push(category);  
}

list():Category[]   {
   return this.categories;
    }
    

    findByName(nome:string): Category{
        const category = this.categories.find(Category => Category.nome === nome);
        return category;

}
}




export {CategoriesRepository};