import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headline } from '../model/headline';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TopHeadlinesService {

  private apiUrl = 'https://newsapi.org/v2';
  private apiKey = '&apiKey=69a0b9a3d0a64530bb6bd2908b3618c4';


  constructor(private http: HttpClient) { }


  getTopHeadlines() {
    return this.http.get<any>(this.apiUrl + "/top-headlines?country=us" + this.apiKey);
  }

}
