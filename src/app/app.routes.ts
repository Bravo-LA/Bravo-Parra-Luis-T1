import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        title: 'OrderTech',
        component: HomeComponent 
    },
    { 
        path: 'informacion/:value', 
        title: 'Solicitudes - OrderTech',
        component: InformationComponent 
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
