import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfilService} from "../../../services/user/profil.service";
import {User} from "../../../models/user";
import {DemandeAmisService} from "../../../services/user/demande-amis.service";
import {DemandeAmis} from "../../../models/DemandeAmis";
declare const $: any;

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.sass']
})
export class UserProfilComponent implements OnInit {

  constructor( private router: Router,private profilService: ProfilService,private demandeService: DemandeAmisService,private route: ActivatedRoute) { }

  status: any;
  id: string;
  id2: number;
  user:User;
  profil = JSON.parse(localStorage.getItem('user')).user;
  private demandeAmis: DemandeAmis = new DemandeAmis();
  private demandeAmis2: DemandeAmis=new DemandeAmis();
  private relation:boolean=true;

  async ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.id2=Number(this.id);
    if(this.profil.id===this.id2){
      this.router.navigateByUrl('/user/profil');
    }
    console.log(this.id2);

    this.user = await this.profilService.getUserAsync(this.id);
    this.demandeAmis2 = await this.demandeService.isFriend(this.user.email);
    if (this.demandeAmis2 === null) {
      this.relation = false;
    }


  }



  async ajouterAmi() {
    this.demandeAmis.receiver = this.user;
    await this.demandeService.ajouterAmi(this.demandeAmis);
    this.relation = true;
    this.ngOnInit();

  }


  async supprimerAmi(id) {
    await this.demandeService.supprimerOuRefuserrAmi(id);
    this.relation = false;
    this.ngOnInit();
  }

  async accepterAmi(id) {
    await this.demandeService.accepterAmi(id);
    this.relation = true;
    this.ngOnInit();
  }
}
