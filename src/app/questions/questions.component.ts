import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Input() questionsAndAnswers: Question[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTask(questionId: string) {
    this.router.navigate(['/question', questionId]);
  }
}
