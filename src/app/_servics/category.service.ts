import { Injectable } from '@angular/core';
import { Category } from '../_models/category.models';
 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categories: Category []=
  [
    {id:1,name:"Entertainment",image:"https://media.giphy.com/media/XtGTdywir49va/giphy.gif  "},
    {id:2,name:"Reaction",image:"https://media.giphy.com/media/Q7ozWVYCR0nyW2rvPW/giphy.gif"},
    {id:3,name:"Stickers",image:"https://media.giphy.com/media/l2YWfTmDHbMHdvPdm/giphy.gif"},
    {id:4,name:"sport",image:"https://media.giphy.com/media/ysKfAmCgcOc3J3I9rA/giphy.gif"},
    {id:5,name:"Artists",image:"https://media.giphy.com/media/C3vlLhZAcgXBH2HYx3/giphy.gif"},
  
  ];
  
  getAllcategory(){
    return this.categories;
  }
}
