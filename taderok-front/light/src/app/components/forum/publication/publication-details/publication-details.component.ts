import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ForumService} from "../../../../services/forum/forum.service";
import {Forum} from "../../../../models/forum";
import {CommentaireForum} from "../../../../models/commentaireForum";

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.sass']
})
export class PublicationDetailsComponent implements OnInit {
  idPublication : number;

  forum : Forum = new Forum();
  listCommentaires : CommentaireForum =  new CommentaireForum();
  constructor( private readonly router: Router,private readonly route: ActivatedRoute, private forumService : ForumService) { }

  ngOnInit() {
    this.idPublication =+ this.route.snapshot.paramMap.get("id");
    console.log(this.route.snapshot.paramMap.get("id"));
    console.log(typeof (this.idPublication));
    this.forumService.getPubDetails(this.idPublication).subscribe(data=>{
      console.log(data);
      this.forum = data;
    }, error1 => console.log(error1))
  }

}
