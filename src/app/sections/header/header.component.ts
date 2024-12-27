import { Component } from '@angular/core';
import { MainButtonComponent } from "../../repeated/main-button/main-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MainButtonComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  header:any="./assets/surface-X1GZqv-F7Tw-unsplash.jpg"
  open: any='';
  openOptions(type: any) {
    if (this.open == type) {
      this.open = '';
    } else {
      this.open = type;
    }
  }
}
