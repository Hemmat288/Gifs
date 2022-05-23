import { Component, OnInit} from '@angular/core';
import { Gifs } from 'src/app/_models/gifs';
import { GifService } from 'src/app/_servics/gif.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {


  gifs;
gifArray!:Gifs[];
  searchText!:string;

  search(){
    this.gifArray= this.gifs.filter(value => value.name.match(this.searchText)|| value.category.name.match(this.searchText))
    this.gifs=this.gifArray;
  }

  constructor(public gitsService:GifService) {
    this.gifs=gitsService.GetAllgifs();
  }


  searchas(){

    this.gifs=this.gitsService.GetAllgifs();


  }
  ngOnInit(): void {
    this.search();
this.searchas();
  }

}
