import { Routes } from '@angular/router';
import { Schedule } from './schedule/schedule';
import { Home } from './home/home';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Profile },       // rota inicial: app-profile
  { path: 'home', component: Home },      // rota app-home
  { path: 'schedule', component: Schedule } // rota app-schedule
];