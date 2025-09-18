import { Routes } from '@angular/router';
import { Schedule } from './schedule/schedule';
import { Home } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { Analytics } from './analytics/analytics';
import { LessonOne } from './lesson-one/lesson-one';
import { PianoRe } from './lesson-two/pianorelembrar/pianore/pianore';
import { LessonTwo } from './lesson-two/lesson-two';
import { LessonThree } from './lesson-three/lesson-three';

export const routes: Routes = [
  { path: '', component: Home },       // rota inicial: app-profile
  { path: 'home', component: Home },      // rota app-home
  { path: 'schedule', component: Schedule }, // rota app-schedule
  { path: 'analytics', component: Analytics }, // rota app-schedule
  { path: 'dashboard', component: DashboardComponent }, // rota app-schedule
  { path: 'lessonOne', component: LessonOne }, // rota app-schedule
  { path: 'lessonTwo', component: LessonTwo }, // rota app-schedule
  { path: 'lessonThree', component: LessonThree } // rota app-schedule
];