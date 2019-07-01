import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";
import {User} from "../../../../models/user";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

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

  ajouterStatus(){
    let now = new Date();
    this.forum.date = now;
    this.forumService.ajouterPublication(this.forum).subscribe(data=>
    {
      console.log(data);
      Swal.fire({
        title:'Votre publication est ajoutée!',
        type:'success'}
      )/*.then(window.location.reload())*/
    }
    , error1 => console.log(error1))
  }

}
