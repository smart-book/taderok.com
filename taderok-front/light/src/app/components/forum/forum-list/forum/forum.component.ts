import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";
import {User} from "../../../../models/user";
import Swal from "sweetalert2";
import {CommentaireForum} from "../../../../models/commentaireForum";
import { DynamicScriptLoaderService } from '../../../../dynamic-script-loader-service.service';
declare const CKEDITOR: any;
declare const $: any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {

  forum : Forum = new Forum();
  ListPublications : Forum[];
  user: User;
  userParse: User = new User();

  niveauChoisi;

  ListPublicationsParNiveau : Forum[] = [];
  ListPublicationsParMatiere : Forum[] = [];

  count : number = 0;

  listCommentaires : CommentaireForum[] ;
  constructor(private forumService: ForumService,private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.forumService.afficherForum().subscribe(data=> {
      console.log(data);
      this.ListPublications = data;
    }, error => console.log(error) );

    this.user = JSON.parse(localStorage.getItem('user')).user;
    console.log(this.user);
    //this.userParse = this.user.user ;
    //console.log(this.userParse);
    this.startScript();
  }

  RedirectForum()
  {
    window.location.reload();
  }

  ajouterStatus(){
    let now = new Date();
    this.forum.date = now;
    this.forumService.ajouterPublication(this.forum).subscribe(data=>
    {
      console.log(data);
      $.notify("Publication ajoutée", "success");
    }
    , error1 => console.log(error1))
  }

  afficherListeDesCommentaires(id) {
    this.forumService.getListCommentsOfOneForum(id).subscribe(
      data => {
        console.log(data);
        this.listCommentaires = data;
      }, error1 => console.log(error1)
    );
  }

  afficherListePublicationsParNiveau(niveau){
    this.ListPublications.filter(e=>{
      if(e.niveau === niveau){
        this.ListPublicationsParNiveau.push(e);
        console.log(this.ListPublicationsParNiveau);
      }
      else {
        console.log('nothing');
        this.ListPublicationsParNiveau = [];
        console.log(this.ListPublicationsParNiveau);
      }
    });

    console.log(this.ListPublicationsParNiveau);

  }
  async startScript() {
    await this.dynamicScriptLoader.load('ckeditor').then( data => {
      this.loadData();

    }).catch(error => console.log(error));
  }


  private loadData(){
    //CKEditor
    CKEDITOR.replace('ckeditor');
    CKEDITOR.config.height = 150;
  }



}
