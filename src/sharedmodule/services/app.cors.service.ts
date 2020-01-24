import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../app/models/app.category.model';
import { Observable } from 'rxjs';

@Injectable()
export class CORSService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:26428/api/Category";
   }

  getData(): Observable<Category[]> {
      let resp: Observable<Category[]> = null;
      resp = this.http.get<Category[]>(this.url);
      return resp;
  }

}
