import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/Athentication/login.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

declare const jQuery: any;

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private loginService: LoginService,  private router: Router) { }

  user: User = new User();

  connectedUser: User = new User();

  idConnected: number = null ;
  isConnected = false;

  login() {
    console.log(this.user.email);
    this.loginService.login(this.user).subscribe(data => {
        console.log(data);
        //  this.idConnected = + data;
        /*if (this.idConnected > 0) {
          this.isConnected = true;
        }*/
        // console.log(typeof (this.idConnected));
        // if (this.isConnected) {
        this.router.navigateByUrl('/dashboard/main');
        // } else { alert('Veuillez verifier vos données'); }
      },
      error => console.log(error));

    this.loginService.getConnectedUser().subscribe(
      data => {console.log(data);
      this.connectedUser = data;
      localStorage.setItem('user',JSON.stringify({user : data}));}
    )
  }

    ngOnInit() {


        (function ($) {
            "use strict";


            /*==================================================================
            [ Focus input ]*/
            $('.input100').each(function () {
                $(this).on('blur', function () {
                    if ($(this).val().trim() != "") {
                        $(this).addClass('has-val');
                    }
                    else {
                        $(this).removeClass('has-val');
                    }
                })
            })


            /*==================================================================
            [ Validate ]*/
            var input = $('.validate-input .input100');

            $('.validate-form').on('submit', function () {
                var check = true;

                for (var i = 0; i < input.length; i++) {
                    if (validate(input[i]) == false) {
                        showValidate(input[i]);
                        check = false;
                    }
                }

                return check;
            });


            $('.validate-form .input100').each(function () {
                $(this).focus(function () {
                    hideValidate(this);
                });
            });

            function validate(input) {
                if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                    if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                }
                else {
                    if ($(input).val().trim() == '') {
                        return false;
                    }
                }
            }

            function showValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).addClass('alert-validate');
                $(".erroe_dis").remove();
                $(".alert-validate").append('<i class="material-icons erroe_dis">error</i>');
            }

            function hideValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).removeClass('alert-validate');
                $(".erroe_dis").remove();
            }

            /*==================================================================
            [ Show pass ]*/
            var showPass = 0;
            $('.btn-show-pass').on('click', function () {
                if (showPass == 0) {
                    $(this).next('input').attr('type', 'text');
                    $(this).addClass('active');
                    showPass = 1;
                }
                else {
                    $(this).next('input').attr('type', 'password');
                    $(this).removeClass('active');
                    showPass = 0;
                }

            });


        })(jQuery);
    }

}
