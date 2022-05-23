import { Category } from '../_models/category.models';
export interface Gifs {
  id?: number;
  image?: string;
  name:string;
  category:Category;
  isFav:boolean;
}
