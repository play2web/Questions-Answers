import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, forkJoin, of } from 'rxjs';
import { QuestionsService } from '../questions/questions.service';
import { AnswersService } from '../answers/answers.service';

@Injectable()
export class QuestionResolver implements Resolve<any[]> {

  constructor(
    private questionService: QuestionsService,
    private answersService: AnswersService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    const questionId = route.params.id;
    const question = this.questionService.getQuestionById(questionId);
    const answers = this.answersService.getByQuestionId(questionId);
    return forkJoin([question, answers]);
  }
}
