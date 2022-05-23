import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/_servics/gif.service';
import { Gifs } from 'src/app/_models/gifs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {
  getId:any;
gifCategory!:[];
  gif!:Gifs[];
  Allgif;

  constructor(private route: ActivatedRoute,private gitService:GifService,public gitsService:GifService) {
    this.Allgif=gitsService.GetAllgifs();
console.log(this.Allgif)
  }


  ngOnInit(): void {
    this.getId=this.route.snapshot.params['id'];
    console.log(this.getId,'getId');
    if(this.getId){
       this.gif= this.gitService.gifs.filter((value)=>{

            return value.id==this.getId;
});

    }
  }
}
