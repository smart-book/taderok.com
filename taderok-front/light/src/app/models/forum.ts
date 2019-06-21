import {User} from "./user";
import {CommentaireForum} from "./commentaireForum";

export class Forum {
  id: number;
  titre: string;
  date: Date;
  description: string;
  matiere: string;
  niveau: string;
  user: User;
  //commentaireForumList: CommentaireForum;
}
