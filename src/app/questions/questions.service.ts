import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Question } from '../question/question';

@Injectable()
export class QuestionsService {
  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Question[]> {
    const currentUrl = `${environment.apiUrl}/questions`;
    return this.http.get<Question[]>(currentUrl);
  }

  public getQuestionById(questionId: number): Observable<Question> {
    const currentUrl = `${environment.apiUrl}/questions/${questionId}`;
    return this.http.get<Question>(currentUrl);
  }
}
