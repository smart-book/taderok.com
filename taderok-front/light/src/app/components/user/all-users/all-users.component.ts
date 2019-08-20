import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AllUsersService} from '../../../services/user/all-users.service';
import {User} from '../../../models/user';
import {DemandeAmisService} from "../../../services/user/demande-amis.service";
import {DemandeAmis} from "../../../models/DemandeAmis";
import {LoginService} from "../../../services/Athentication/login.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.sass']
})
export class AllUsersComponent implements OnInit {
  private ListUsers: User[];
  private demandeAmis: DemandeAmis = new DemandeAmis();
  profil: User;

  constructor(private profilService: LoginService, private allUserService: AllUsersService,private demandeAmisService: DemandeAmisService,  private router: Router) { }

  ngOnInit() {
    this.allUserService.allProfs().subscribe(data => {
      console.log(data);
      this.ListUsers = data;
    }, error => console.log(error) );
    this.profilService.getConnectedUser().subscribe(data => {
      console.log(data);
      this.profil = data;
    }, error => console.log(error));
  }

  ajouterAmis(id) {
    console.log(this.profil);
  this.demandeAmis.receiver = id;
  this.demandeAmisService.ajouterAmi(this.demandeAmis).subscribe(data => {
    console.log(data);
  }, error => console.log(error) );
  }
}
