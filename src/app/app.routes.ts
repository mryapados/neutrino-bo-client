import { CanActivateAuthGuard } from './views/login/can-activate.authguard';
import { HomeComponent } from './views/home/home.component';
import {Routes} from '@angular/router';
import {MainViewComponent} from './views/main-view/main-view.component';
import {MinorViewComponent} from './views/minor-view/minor-view.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {BlankComponent} from './components/common/layouts/blank.component';
import {BasicComponent} from './components/common/layouts/basic.component';


export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // App views
  {
    path: '', component: BasicComponent,
    children: [
      {path: 'home', component: HomeComponent, canActivate: [CanActivateAuthGuard]},
      {path: 'mainView', component: MainViewComponent},
      {path: 'minorView', component: MinorViewComponent}
    ]
  },
  {
    path: '', component: BlankComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'crud', component: BasicComponent, loadChildren: 'app/views/crud/crud.module#CrudModule', canActivate: [CanActivateAuthGuard]
  },

  // Handle all other routes
  {path: '**',    component: MainViewComponent }
];
