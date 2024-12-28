import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../sections/header/header.component";
import { PopularCategoriesComponent } from "../../sections/popular-categories/popular-categories.component";
import { PopularAndFeaturedAdsComponent } from '../../sections/popular-and-featured-ads/popular-and-featured-ads.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, CommonModule, HeaderComponent, PopularCategoriesComponent,PopularAndFeaturedAdsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
