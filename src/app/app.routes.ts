import { Routes } from '@angular/router';
import { Schedule } from './schedule/schedule';
import { Home } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { Analytics } from './analytics/analytics';
import { LessonOne } from './lesson-one/lesson-one';
import { PianoRe } from './lesson-two/pianorelembrar/pianore/pianore';
import { LessonTwo } from './lesson-two/lesson-two';
import { LessonThree } from './lesson-three/lesson-three';
import { Continua } from './continua/continua';
import { LessonFour } from './lesson-four/lesson-four';
import { Muitobemdo } from './lesson-one/pianodo/pianododois/pianodotres/muitobemdo/muitobemdo';
import { Muitobemre } from './lesson-two/pianorelembrar/pianore/pianoredois/pianoretres/muitobemdo/muitobemre';
import { Pianodotres } from './lesson-three/pianodo/pianododois/pianodotres/pianodotres';
import { LessonThreeTwo } from './lesson-three/pianodo/pianododois/lesson-three-two/lesson-three-two';
import { DashboardturmaUmComponent } from './dashboardturmaum/dashboardturmaum';
import { Scheduleturmaum } from './scheduleturmaum/scheduleturmaum';
import { Muitobemreturmaum } from './lesson-three/pianodo/pianododois/pianodotres/pianodoquatro/muitobemdo/muitobemreturmaum';
import { Continuaturmaum } from './continuaturmaum/continuaturmaum';
import { Profile } from './home/profile/profile';
import { Metromedio } from './lesson-four/metromedio/metromedio';
import { Metrorapido } from './lesson-four/metrorapido/metrorapido';
import { Parabensandamento } from './lesson-four/parabensandamento/parabensandamento';

export const routes: Routes = [
  { path: '', component: Profile },       // rota inicial: app-profile
  { path: 'home', component: Home },      
  { path: 'schedule', component: Schedule }, // rota app-schedule
    { path: 'metromedio', component: Metromedio }, // rota app-schedule
    { path: 'metrorapido', component: Metrorapido }, // rota app-schedule
  { path: 'scheduleFirst', component: Scheduleturmaum }, // rota app-schedule
  { path: 'dashboardFirst', component: DashboardturmaUmComponent }, // rota app-schedule
  { path: 'analytics', component: Analytics }, // rota app-schedule
  { path: 'dashboard', component: DashboardComponent }, // rota app-schedule
  { path: 'lessonOne', component: LessonOne }, // rota app-schedule
  { path: 'lessonTwo', component: LessonTwo }, // rota app-schedule
  { path: 'lessonthreetwo', component: LessonThreeTwo }, // rota app-schedule
  { path: 'continua', component: Continua }, // rota app-schedule
  { path: 'continuaturmaum', component: Continuaturmaum }, // rota app-schedule
  { path: 'muitobemDo', component: Muitobemdo }, // rota app-schedule
  { path: 'muitobemre', component: Muitobemre }, // rota app-schedule
  { path: 'muitobemreturmaum', component: Muitobemreturmaum }, // rota app-schedule
  { path: 'parabensandamento', component: Parabensandamento }, // rota app-schedule
  { path: 'lessonFour', component: LessonFour }, // rota app-schedule
  { path: 'lessonThree', component: LessonThree } // rota app-schedule
];