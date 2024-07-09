import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileHeaderComponent,
    ProfileDetailsComponent,
    ProfileFollowersComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-git';
}
