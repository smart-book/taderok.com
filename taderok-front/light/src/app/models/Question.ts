import {Quiz} from "./quiz";
import {Proposition} from "./Proposition";
import {BonneReponse} from "./BonneReponse";

export class Question
{

  id : number;
  question:String;
  BonneProposition:String;
  quiz:Quiz
  propositions: Proposition[];
  bonneReponses: BonneReponse[];
}
