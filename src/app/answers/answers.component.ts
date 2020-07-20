import { Component, OnInit, Input } from '@angular/core';
import { Answer } from './answers';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  @Input() answers: Answer[];
  constructor() { }

  ngOnInit(): void {
  }

}
