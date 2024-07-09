import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-followers',
  standalone: true,
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  followers = [
    { name: 'Carlos', description: 'Rio de Janeiro - Brazil', image: 'path-to-image.jpg' },
    { name: 'Pedro', description: 'Another description', image: 'path-to-image.jpg' },
    // Adicione mais seguidores aqui
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
