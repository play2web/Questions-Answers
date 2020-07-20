import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Answer } from './answers';

@Injectable()
export class AnswersService {
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Answer[]> {
    const currentUrl = `${environment.apiUrl}/anwsers`;
    return this.http.get<Answer[]>(currentUrl);
  }

  getByQuestionId(questionId: string): Observable<Answer[]> {
    const currentUrl = `${environment.apiUrl}/anwsers?questionId=${questionId}`;
    return this.http.get<Answer[]>(currentUrl);
  }

  addAnswer(answer: Answer): Observable<Answer> {
    const currentUrl = `${environment.apiUrl}/anwsers`;
    return this.http.post<Answer>(currentUrl, answer);
  }
}
