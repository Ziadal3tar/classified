import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from "../../repeated/main-button/main-button.component";
import { HeaderComponent } from "../../sections/header/header.component";
import { PopularCategoriesComponent } from "../../sections/popular-categories/popular-categories.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, CommonModule, MainButtonComponent, HeaderComponent, PopularCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
