import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarouselComponent } from './content/carousel/carousel.component';
import { CategoryComponent } from './content/category/category.component';
import { HomeComponent } from './home/home.component';
import { CategoryService } from './_servics/category.service';
import { GifListComponent } from './content/gif-list/gif-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { GifDetailsComponent } from './pages/gif-details/gif-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CategoryComponent,
    HomeComponent,
    GifListComponent,
    GifDetailsComponent,


  ],
  imports: [
    HttpClientModule,
  BrowserModule,
    AppRoutingModule,
    CarouselModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
  ],

  providers: [ CategoryService
],
  bootstrap: [AppComponent],
})
export class AppModule { }
