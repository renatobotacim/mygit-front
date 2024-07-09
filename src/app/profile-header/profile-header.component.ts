import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})

export class ProfileHeaderComponent {

  paramValue: string = '';
  data: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.paramValue = params.get('profile') || '';  // Usa um valor padrão se o parâmetro for null
    });

    this.getData(this.paramValue);
  }

  getData(profile: any): void {


    if (profile) {
      this.apiService.getData(`profile/show/${profile}`).subscribe(
        response => {
          this.data = response.data;
          console.log(this.data);
        },
        error => {
          console.error('Erro ao obter dados', error);
        }
      );
    }


  }

}
