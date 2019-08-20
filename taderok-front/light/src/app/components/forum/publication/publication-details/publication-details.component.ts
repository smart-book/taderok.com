import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";
import {CommentaireForum} from "../../../../models/commentaireForum";
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import {User} from "../../../../models/user";
import {LoginService} from "../../../../services/Athentication/login.service";
import {AppComponent} from "../../../../app.component";
import { DynamicScriptLoaderService } from '../../../../dynamic-script-loader-service.service';
declare const CKEDITOR: any;
declare const $: any;


@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.sass']
})
export class PublicationDetailsComponent implements OnInit {
  idPublication : number;

  contenu : string = "";

  contenuWithEmojiCode : string;
  forum : Forum = new Forum();
  ListPublications : Forum[];
  listCommentaires : CommentaireForum[] ;
  commentaire : CommentaireForum = new CommentaireForum();
  public conntectedUser = User;
  constructor(private appComponent: AppComponent, private readonly router: Router,private readonly route: ActivatedRoute, private forumService : ForumService,private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.forumService.afficherForum().subscribe(data=> {
      console.log(data);
      this.ListPublications = data;
    }, error => console.log(error) );

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
    this.startScript();

  }

  showEmojiPicker = false;


  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    const { contenu } = this;
    const text = `${contenu}${event.emoji.native}`;

    console.log(event.emoji.unified);

    this.contenuWithEmojiCode = text.replace(`${event.emoji.native}`,`${event.emoji.colons}`);
    this.contenu = text;
    this.showEmojiPicker = false;
  }

  commenter(){
    this.ngOnInit();
    let now = new Date();
    this.commentaire.date = now;
    //this.commentaire.contenu = this.contenuWithEmojiCode;
    this.forumService.ajouterCommentaire(this.forum.id, this.commentaire).subscribe(
      data =>{
        console.log(data)
      },
      error1 => console.log(error1)
    );
    this.commentaire.contenu = "";
    this.ngOnInit();
  }

  async startScript() {
    await this.dynamicScriptLoader.load('ckeditor').then( data => {
      this.loadData();
    }).catch(error => console.log(error));
  }


  private loadData(){
    //CKEditor
    CKEDITOR.replace('ckeditor');
    CKEDITOR.config.height = 300;
  }


}


