import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsService } from '../questions/questions.service';
import { QuestionComponent } from './question.component';

@NgModule({
  declarations: [
    QuestionComponent
  ],
  exports: [
    QuestionComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionsService
  ],
})
export class QuestionModule { }

