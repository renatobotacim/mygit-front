import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/'; // URL da sua API
  private apiUri = 'profile/show/joaorca'; // URL da sua API


  constructor(private http: HttpClient) {
  }

  // GET
  getData(uri: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + uri);
  }

  //  POST
  postData(data: any, uri: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + uri, data);
  }

  // PUT
  updateData(id: number, data: any, uri: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl + uri}/${id}`, data);
  }

  // DELETE
  deleteData(id: number, uri: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl + uri}/${id}`);
  }

}
