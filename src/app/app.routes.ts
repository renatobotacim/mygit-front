import { Routes } from '@angular/router';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';

export const routes: Routes = [
  { path: 'profile/:profile', component: ProfileHeaderComponent },
  { path: 'details', component: ProfileDetailsComponent },
  { path: 'followers', component: ProfileFollowersComponent },
  { path: '', redirectTo: '/profile/:id', pathMatch: 'full' }, // Redireciona para o header por padrão
];
