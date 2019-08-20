import {Quiz} from "./quiz";
import {Proposition} from "./Proposition";
import {BonneReponses} from "./BonneReponses";

export class Question
{

  id : number;
  question:String;
  BonneProposition:String;
  quiz:Quiz
  propositions: Proposition[];
  bonneReponses: BonneReponses[];
}
