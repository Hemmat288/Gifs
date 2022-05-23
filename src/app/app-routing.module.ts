import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './content/carousel/carousel.component';
import { CategoryComponent } from './content/category/category.component';
import { GifListComponent } from './content/gif-list/gif-list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GifDetailsComponent } from './pages/gif-details/gif-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'gifs',component:GifListComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'details/:id',component:GifDetailsComponent},
  {path:'gifs/details/:id',component:GifDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
