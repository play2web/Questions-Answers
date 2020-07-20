import { Answer } from '../answers/answers';

export class Question {
  id: string;
  title: string;
  description: string;
  answers: Answer[];
  timestamp: Date;
}
