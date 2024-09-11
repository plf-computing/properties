import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AppHeroComponent } from "../app-hero/app-hero.component";
import { PropertiesComponent } from "../properties/properties.component";
import { ToursComponent } from "../tours/tours.component";
import { TravelsComponent } from "../travels/travels.component";
import { ActionComponent } from "../action/action.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, AppHeroComponent, PropertiesComponent, ToursComponent, TravelsComponent, ActionComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
