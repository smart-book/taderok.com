import {Question} from "./Question";

export class Quiz
{

  id :number;
  id_prof:number;
  nomQuiz:String;
  date : Date;
  questions: Question[];
}
