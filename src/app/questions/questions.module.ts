import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionsComponent } from './questions.component';
import { QuestionsService } from './questions.service';
import { AnswersModule } from '../answers/answers.module';

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  exports: [
    QuestionsComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AnswersModule
  ],
  providers: [
    QuestionsService
  ],
})
export class QuestionsModule { }

