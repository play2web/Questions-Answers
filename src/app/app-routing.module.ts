import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { QuestionComponent } from './question/question.component';
import { QuestionResolver } from './question/question.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { dashboardData: DashboardResolver },
    data: {
      title: 'NewContract.DocumentTitle',
    }
  },
  {
    path: 'question/:id',
    component: QuestionComponent,
    resolve: { questionData: QuestionResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
