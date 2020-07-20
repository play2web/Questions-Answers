import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Question } from './question';
import { Answer } from '../answers/answers';
import { AnswersService } from '../answers/answers.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  addAnswerForm: FormGroup;
  question: Question;
  answers: Answer[];
  answer: Answer;

  constructor(
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private answersService: AnswersService) { }

  ngOnInit(): void {
    this.getQuestionAndAnswer();
    this.buildForm();
  }

  getQuestionAndAnswer(): void {
    this.activatedRoute.data.subscribe((resolver: { questionData: any[] }) => {
      if (resolver.questionData) {
        this.question = resolver.questionData[0];
        this.answers = resolver.questionData[1].sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
        this.question.answers = this.answers;
      }
    });
  }

  addAnwser(): void {
    this.answer = {
      text: this.addAnswerForm.value.answer,
      questionId: this.question.id,
      timestamp: Date.now()
    };
    this.answersService.addAnswer(this.answer).subscribe(() => {
      this.refreshAnswers(this.answer.questionId);
    });
    this.addAnswerForm.reset();
  }


  likeDislike(event: any, answerId: string, haveClass: string) {
    const hasClass = event.target.classList.contains(haveClass);
    if (hasClass) {
      this.renderer.removeClass(event.target, 'fa-thumbs-up');
      this.renderer.addClass(event.target, 'fa-thumbs-down');
    } else {
      this.renderer.removeClass(event.target, 'fa-thumbs-down');
      this.renderer.addClass(event.target, 'fa-thumbs-up');
    }
  }

  private buildForm(): void {
    this.addAnswerForm = this.formBuilder.group({
      answer: ['', Validators.required]
    });
  }

  private refreshAnswers(questionId: string): void {
    this.answersService.getByQuestionId(questionId).subscribe(data => {
      this.answers = data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      this.question.answers = data;
    });
  }
}
