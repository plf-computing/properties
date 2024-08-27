import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;
  screenSize: number;

  constructor() {
    this.screenSize = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = event.target.innerWidth;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
 
}


