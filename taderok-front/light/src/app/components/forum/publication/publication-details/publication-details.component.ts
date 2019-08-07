import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";
import {CommentaireForum} from "../../../../models/commentaireForum";
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import {User} from "../../../../models/user";
import {LoginService} from "../../../../services/Athentication/login.service";
import {AppComponent} from "../../../../app.component";

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.sass']
})
export class PublicationDetailsComponent implements OnInit {
  idPublication : number;

  contenu : string = "";
  emojiText : string = "";
  sendEmoji : boolean = false;

  contenuWithEmojiCode : string = "";
  forum : Forum = new Forum();
  listCommentaires : CommentaireForum[] ;
  commentaire : CommentaireForum = new CommentaireForum();
  public conntectedUser = User;
  constructor(private appComponent: AppComponent, private readonly router: Router,private readonly route: ActivatedRoute, private forumService : ForumService) { }

  ngOnInit() {
    this.conntectedUser = this.appComponent.conntectedUser;
    console.log(this.conntectedUser);
    this.idPublication =+ this.route.snapshot.paramMap.get("id");
    console.log(this.route.snapshot.paramMap.get("id"));
    console.log(typeof (this.idPublication));
    /////////////////////////////
    // get one pub details
    this.forumService.getPubDetails(this.idPublication).subscribe(data=>{
      console.log(data);
      this.forum = data;
    }, error1 => console.log(error1));

    ///////////////////////////
    // get list comments
    this.forumService.getListCommentsOfOneForum(this.idPublication).subscribe(
      data => {
        console.log(data);
        this.listCommentaires = data;
      }, error1 => console.log(error1)
    );
  }

  showEmojiPicker = false;


  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    this.sendEmoji = true;
    const { contenu } = this;
    const text = `${event.emoji.native}`;
    console.log(text);
    this.contenu += text;
    console.log(this.contenu.replace(text,`${event.emoji.colons}`));
    this.contenuWithEmojiCode += this.contenu.replace(text,`${event.emoji.colons}`);
    console.log(this.contenuWithEmojiCode);
    this.showEmojiPicker = false;
    //this.contenuWithEmojiCode = "";
  }

  commenter(){
    this.ngOnInit();
    let now = new Date();
    this.commentaire.date = now;
    console.log(this.contenu);
    if (!this.sendEmoji){
      this.commentaire.contenu = this.contenu;
    }else {
      console.log(this.contenu.substring(this.contenuWithEmojiCode.length , this.contenu.length));
      this.commentaire.contenu = this.contenuWithEmojiCode + ' '+ this.contenu.substring(this.contenuWithEmojiCode.length , this.contenu.length);
    }
    this.forumService.ajouterCommentaire(this.forum.id, this.commentaire).subscribe(
      data =>{
        console.log(data)
      },
      error1 => console.log(error1)
    );
    this.contenu = "";
    this.emojiText = "";
    this.contenuWithEmojiCode ="";
    this.ngOnInit();
  }

}
