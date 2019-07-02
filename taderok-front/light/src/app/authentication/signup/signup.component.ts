import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {RegisterService} from "../../services/Athentication/register.service";
import {User} from "../../models/user";

declare const jQuery: any;

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {




    constructor(private registerService: RegisterService,  private router: Router,private _formBuilder: FormBuilder) { }


  role:string="ETUDIANT";
  test:boolean=false;

  user: User = new User();

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

    register(){

      if(this.role==="ETUDIANT")
      {
        this.registerService.registerEtudiant(this.user).subscribe(data => {
          console.log(data);
          this.router.navigateByUrl('/authentication/signin');
          // } else { alert('Veuillez verifier vos données'); }
        },
            error => console.log(error));
      }
      else if(this.role==="PARENT")
      {
        this.registerService.registerParent(this.user).subscribe(data => {
            console.log(data);
            this.router.navigateByUrl('/authentication/signin');
            // } else { alert('Veuillez verifier vos données'); }
          },
          error => console.log(error));
      }
      else{
        this.registerService.registerProf(this.user).subscribe(data => {
            console.log(data);
            this.router.navigateByUrl('/authentication/signin');
            // } else { alert('Veuillez verifier vos données'); }
          },
          error => console.log(error));
      }

    }




    ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  changeRole(s:string) {
    this.role=s;
    console.log(this.role);
  }

  valider() {
    if(!this.test)
      this.test=true;
    else
      this.test=false;
    console.log(this.test);
  }
  isValid()
  {
    return this.test;
  }
}
