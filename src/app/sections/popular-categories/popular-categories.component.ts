import { Component } from '@angular/core';
import { MainButtonComponent } from "../../repeated/main-button/main-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-categories',
  imports: [MainButtonComponent,CommonModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent {

}
