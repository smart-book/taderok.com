import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AllUsersService} from '../../../services/user/all-users.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.sass']
})
export class AllUsersComponent implements OnInit {
  private ListUsers: User[];

  constructor(private allUserService: AllUsersService ,  private router: Router) { }

  ngOnInit() {
    this.allUserService.allProfs().subscribe(data => {
      console.log(data);
      this.ListUsers = data;
    }, error => console.log(error) );
  }

}
