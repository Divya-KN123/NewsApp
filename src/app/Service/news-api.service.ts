import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private http: HttpClient) {}

  topHeadlinesApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=41a0b6a496524ecc892f87a9a53e982b';

  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=41a0b6a496524ecc892f87a9a53e982b';

  topHeadlines(): Observable<any> {
    return this.http.get(this.topHeadlinesApiUrl);
  }

  technologyNews(): Observable<any> {
    return this.http.get(this.techNewsApiUrl);
  }
}
