import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainButtonComponent } from "../../repeated/main-button/main-button.component";

@Component({
  selector: 'app-nav',
  imports: [CommonModule, MainButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  openNav:boolean=false

}
