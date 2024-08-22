import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
