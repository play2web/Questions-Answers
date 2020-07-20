import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question/question';
import { Answer } from '../answers/answers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  questionsAndAnswers: Question[];
  answers: Answer[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuestionAndAnswers();
  }

  getQuestionAndAnswers(): void {
    this.activatedRoute.data.subscribe((resolver: { dashboardData: any[] }) => {
      if (resolver.dashboardData) {
        const sortedQuestions = resolver.dashboardData[0].sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
        this.answers = resolver.dashboardData[1].sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
        this.questionsAndAnswers = sortedQuestions.reduce((acc, curr, index) => {
          acc[index] = curr;
          acc[index].answers = acc[index].answers || [];
          acc[index].answers.push(this.answers.filter(answer => answer.questionId === curr.id));
          return acc;
        }, []);
      }
    });
  }
}


