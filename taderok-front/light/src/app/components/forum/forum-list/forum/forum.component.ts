import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";
import {User} from "../../../../models/user";
import Swal from "sweetalert2";
import {CommentaireForum} from "../../../../models/commentaireForum";
declare const $: any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {

  forum : Forum = new Forum();
  ListPublications : Forum[];
  user: any;
  userParse: User = new User();

  niveauChoisi;

  ListPublicationsParNiveau : Forum[] = [];
  ListPublicationsParMatiere : Forum[] = [];

  count : number = 0;

  listCommentaires : CommentaireForum[] ;
  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.afficherForum().subscribe(data=> {
      console.log(data);
      this.ListPublications = data;
    }, error => console.log(error) );

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.userParse = this.user.user ;
    console.log(this.userParse);
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

}
