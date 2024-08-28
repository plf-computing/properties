import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AppHeroComponent } from "./app-hero/app-hero.component";
import { PropertiesComponent } from "./properties/properties.component";
import { ToursComponent } from "./tours/tours.component";
import { TravelsComponent } from "./travels/travels.component";
import { ActionComponent } from "./action/action.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AppHeroComponent, PropertiesComponent, ToursComponent, TravelsComponent, ActionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'properties';
}
