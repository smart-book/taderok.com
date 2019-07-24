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
  private demandeAmis2: DemandeAmis=null;
  private relation:boolean=true;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.id2=Number(this.id);
    if(this.profil.id===this.id2){
      this.router.navigateByUrl('/user/profil');
    }
    console.log(this.id2);
    this.profilService.getUser(this.id).subscribe(data=> {
      console.log(data);
      this.user = data;
      console.log(this.user.email);
      this.demandeService.isFriend(this.user.email).subscribe(data=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaa")
        console.log(data);
        if(data===null){
          this.relation=false;
        }
        else
        this.demandeAmis2=data;
      })
    },error => console.log(error));

  }



  ajouterAmi(){
    this.demandeAmis.receiver=this.user;
    this.demandeService.ajouterAmi(this.demandeAmis).subscribe(data=>{
      console.log(data)
      $.notify("Publication ajoutée", "success");
      location.reload();
    })

  }


  supprimerAmi(id) {
    this.demandeService.supprimerOuRefuserrAmi(id).subscribe(data=>{
      console.log(data)
      $.notify("Publication ajoutée", "success");
      location.reload();
    })
  }

  accepterAmi(id) {
    this.demandeService.accepterAmi(id).subscribe(data=>{
      console.log(data)
      $.notify("Publication ajoutée", "success");
      location.reload();
    })
  }
}
