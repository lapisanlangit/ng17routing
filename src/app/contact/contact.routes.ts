import { Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AlamatComponent } from './alamat/alamat.component';
import { InfoComponent } from './info/info.component';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: 'alamat',
        component: AlamatComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
    ],
  },
];
