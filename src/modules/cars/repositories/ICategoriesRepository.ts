import {Category} from "../model/Category";



interface ICreateCategoryDTO {
    nome:string;
    descricao:string;
}

interface ICategoriesRepository{
    findByName(nome:string): Category;
    list():Category[];
    create({nome, descricao}:ICreateCategoryDTO):void;
}

export{ICategoriesRepository,ICreateCategoryDTO};