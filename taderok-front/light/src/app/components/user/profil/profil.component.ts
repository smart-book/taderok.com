import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfilService} from '../../../services/user/profil.service';
import {User} from "../../../models/user";
import {LoginService} from "../../../services/Athentication/login.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {
  profil: User;

  constructor(private profilService: LoginService, private router: Router ) {}

  ngOnInit() {
    this.profilService.getConnectedUser().subscribe(data => {
      console.log(data);
      this.profil = data;
    }, error => console.log(error));

  }


}
