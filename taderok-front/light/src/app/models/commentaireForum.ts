import {User} from "./user";
import {Forum} from "./forum";

export class CommentaireForum {
  id: number;
  date: Date;
  contenu: string;
  user: User;
}
