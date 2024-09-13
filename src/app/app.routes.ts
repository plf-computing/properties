import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PropertiesComponent } from './properties/properties.component';
import { ToursComponent } from './tours/tours.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { TravelPageComponent } from './pages/travel-page/travel-page.component';


export const routes: Routes = [
    {
        path: '', redirectTo:'home' ,pathMatch:'full'
    },
    {
        path:'home', component:HomePageComponent 
    },
    // {
    //     path:'properties', component:PropertiesPageComponent
    // },
    // {
    //     path:'tours', component:ToursPageComponent
    // },
    // {
    //     path:'travel', component:TravelPageComponent
    // },

];
