import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_servics/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories;   
  constructor(categoryServer:CategoryService) {
   
    this.categories= categoryServer.getAllcategory();
   }

  ngOnInit(): void {
    console.log("hiiiiiiiiiiiiii");
  }


}
