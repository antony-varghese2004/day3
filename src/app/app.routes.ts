import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { DepartmentComponent } from './page/department/department.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'department',component:DepartmentComponent}
];

