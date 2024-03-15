import {Routes} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {AboutComponent} from "./views/about/about.component";
import {ContactComponent} from "./views/contact/contact.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];
