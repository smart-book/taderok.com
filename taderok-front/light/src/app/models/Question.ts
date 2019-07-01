import {Reponse} from "./Reponse";
import {Quiz} from "./quiz";

export class Question
{

  id : number;
  question:String;
  reponsesList:Reponse[];
  quiz:Quiz
}
