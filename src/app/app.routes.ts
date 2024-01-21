import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  {
    path: 'about',
    children: [
      {
        path: 'company',
        title: 'About | Company',
        component: CompanyComponent,
      },
      {
        path: 'employee',
        title: 'About | Employee',
        component: EmployeesComponent,
      },
    ],
  },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent },
];
