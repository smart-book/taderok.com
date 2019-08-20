import {Question} from "./Question";
import {Prof} from "./prof";

export class Quiz
{

  id :number;
  id_prof:number;
  nomQuiz:String;
  date : Date;
  questions: Question[];
  visible: Boolean;
  prof: Prof
}
