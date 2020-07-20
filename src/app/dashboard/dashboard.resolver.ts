import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, forkJoin, of } from 'rxjs';
import { QuestionsService } from '../questions/questions.service';
import { AnswersService } from '../answers/answers.service';

@Injectable()
export class DashboardResolver implements Resolve<any[]> {

  constructor(
    private questionService: QuestionsService,
    private answersService: AnswersService
  ) { }

  resolve(): Observable<any[]> {
    const question = this.questionService.getAll();
    const answers = this.answersService.getAll();
    return forkJoin([question, answers]);
  }
}
