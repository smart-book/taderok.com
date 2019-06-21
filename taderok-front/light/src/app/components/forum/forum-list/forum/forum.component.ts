import { Component, OnInit } from '@angular/core';
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {

  forum : Forum = new Forum();
  ListPublications : Forum[];
  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.afficherForum().subscribe(data=> {
      console.log(data);
      this.ListPublications = data;
    }, error => console.log(error) );
  }

  ajouterStatus(){
    this.forum.id = 2;
    this.forumService.ajouterPublication(this.forum).subscribe(data=>console.log(data), error1 => console.log(error1))
  }

}
