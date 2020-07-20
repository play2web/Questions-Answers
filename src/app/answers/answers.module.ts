import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AnswersComponent } from './answers.component';
import { AnswersService } from './answers.service';


@NgModule({
  declarations: [
    AnswersComponent
  ],
  exports: [
    AnswersComponent,
    HttpClientModule],
  imports: [
    BrowserModule
  ],
  providers: [
    AnswersService
  ],
})
export class AnswersModule { }

