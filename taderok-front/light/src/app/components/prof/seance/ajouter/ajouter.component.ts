import {Component, EventEmitter, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Seance} from "../../../../models/seance";
import {GroupesService} from "../../../../services/prof/groupes.service";
import {SeanceService} from "../../../../services/prof/seance.service";
import {FormBuilder} from "@angular/forms";
import {Groupes} from "../../../../models/groupes";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {DynamicScriptLoaderService} from "../../../../dynamic-script-loader-service.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';




declare const $: any;
declare const jQuery: any;
declare const Dropzone: any;
declare const M: any;



@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AjouterComponentSeance implements OnInit {
  groupes : Groupes = new Groupes();
  groupees : Groupes[];
  groupe : Groupes = new Groupes();
  seance : Seance = new Seance();
  private modal ;
  modalRef: BsModalRef;


  constructor(private modalService: BsModalService,private seanceService : SeanceService,public fb: FormBuilder,private groupesService : GroupesService, private router: Router,private dynamicScriptLoader: DynamicScriptLoaderService) { }
  user : any;
  ngOnInit() {
    let AppCalendar = function () {
      return {
        init: function () {
          this.initCalendar()
        },
        initCalendar: function () {
          if (jQuery().fullCalendar) {
            var d = new Date,
              date = d.getDate(),
              month = d.getMonth(),
              year = d.getFullYear(),
              r = {};
            $("#calendar").removeClass("mobile"), r = {
              left: "prev,next,today",
              center: "title",
              right: "month,agendaWeek,agendaDay"
            };
            var l = function (e) {
                var t = {
                  title: $.trim(e.text())
                };
                e.data("eventObject", t), e.draggable({
                  zIndex: 999,
                  revert: !0,
                  revertDuration: 0
                })
              },
              add = function (e) {
                e = 0 === e.length ? "Untitled Event" : e;
                var t = $('<div class="fc-event label-event-' + e + '">' + e + '</div>');
                jQuery("#event_box").append(t), l(t)
              };
            $("#external-events div.external-event").each(function () {
              l($(this))
            }), $("#event_add").unbind("click").on("click", function () {
              var e = $("#event_title").val();
              add(e)
            }), $("#event_box").html(""), add("holiday"), add("birthday"), add("meeting"), add("competition"), add("dinner"), add("party"), $("#calendar").fullCalendar("destroy"), $("#calendar").fullCalendar({
              header: r,
              defaultView: "month",
              slotMinutes: 15,
              editable: !0,
              droppable: !0,
              drop: function (e, t) {
                var a = $(this).data("eventObject"),
                  n = $.extend({}, a);
                n.start = e, n.allDay = t, n.className = $(this).attr("data-class"), $("#calendar").fullCalendar("renderEvent", n, !0), $("#drop-remove").is(":checked") && $(this).remove()
              },

              /***** events ********/
              events: [{
                title: "Annual Day",
                start: new Date(year, month, date - 5, 0, 0),
                end: new Date(year, month, date - 2, 0, 0),
                backgroundColor: "#00FFFF"
              }, {
                title: "Sports Event",
                start: new Date(year, month, date - 10, 9, 0),
                end: new Date(year, month, date - 8, 0, 0),
                backgroundColor: "#F3565D"
              }, {
                title: "Repeating Event",
                start: new Date(year, month, date + 5, 16, 0),
                allDay: !1,
                backgroundColor: "#1bbc9b"
              }, {
                title: "Meeting",
                start: new Date(year, month, date, 10, 30),
                allDay: !1
              }, {
                title: "Result Day",
                start: new Date(year, month, date + 7, 19, 0),
                end: new Date(year, month, date + 1, 22, 30),
                backgroundColor: "#DC35A9",
                allDay: !1
              }, {
                title: "Click for Google",
                start: new Date(year, month, 29),
                end: new Date(year, month, 30),
                backgroundColor: "#9b59b6",
                url: "http://google.com/"
              }]
            })
          }
        }

      }
    }();
    jQuery(document).ready(function () {
      'use strict';
      AppCalendar.init()
    });





    console.log("seance");

      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user.user.id);

    this.groupesService.afficherGroupe().subscribe(data => {
      console.log(data);
      this.groupees = data;
    }, error => console.log(error));
  }





  doAlert(){
    console.log("salut");

  }



  afficherSeance()
  {
    /*this.reclamationService.AfficherReclamationUser().subscribe(data => {
      console.log(data);
      this.list = data;
    }, error => console.log(error));
     */
    this.router.navigate(['/components/prof/seance/list']);
    window.location.reload();
  }
  ajouterSeance(){
    console.log(this.seance.date_debut);
      console.log(this.seance.matiere);
    this.seanceService.ajouterSeance(this.seance).subscribe(data=>{console.log(data);
      $.notify("Access granted", "success");
      /*Swal.fire(
        'Succes!',
        'Votre seance a été ajoutée!',
        'success'
      )*/
    }, error => {console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir à nouveau les informations de la seance!',
      });
    })
  }


  registrationForm = this.fb.group({
    cityName: ['zayneb']
  })
  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
    }
  private loadData(){


    //Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY - HH:mm',
      clearButton: true,
      weekStart: 1
    });

    $('.datepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });
    $('.datepicker2').bootstrapMaterialDatePicker({
      format: 'DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
      format: 'HH:mm',
      clearButton: true,
      date: false
    });

    $('input#input_text, textarea#textarea2').characterCounter();

  }


}
