import {v4 as uuidv4} from 'uuid' 

 class Category
  {
 
        id?: string;
        nome: string;
        descricao: string;
        data_criacao: Date;


       constructor(){
       if(!this.id){
              this.id = uuidv4();
       }
 
       }
      
 
       }  


 export  {Category};