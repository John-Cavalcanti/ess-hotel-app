import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserEvaluationService {
  private apiUrl = 'http://localhost:3000/review';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  addReview(review: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, review);
  }
}
