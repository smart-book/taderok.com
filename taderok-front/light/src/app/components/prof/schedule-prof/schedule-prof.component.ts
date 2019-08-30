import {Component, OnInit, ViewChild} from '@angular/core';
import { recurrenceData } from './data';
import {createElement, extend, L10n} from '@syncfusion/ej2-base';
import {
  ScheduleComponent,
  EventSettingsModel,
  EventRenderedArgs,
  View,
  DayService,
  WeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
  PopupOpenEventArgs,
  RecurrenceEditor, DragEventArgs, RecurrenceEditorChangeEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import {SeanceService} from "../../../services/prof/seance.service";
import {DropDownList} from "@syncfusion/ej2-dropdowns";
import {DateTimePicker} from "@syncfusion/ej2-calendars";
import {Seance} from "../../../models/seance";
import {DataManager, Query, RemoteSaveAdaptor, ReturnOption, WebApiAdaptor} from '@syncfusion/ej2-data';
import {FormBuilder} from "@angular/forms";
import {GroupesService} from "../../../services/prof/groupes.service";
import {Groupes} from "../../../models/groupes";
import Swal from "sweetalert2";
declare const $: any;

import { loadCldr} from '@syncfusion/ej2-base';
loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/fr-CH/ca-gregorian.json'),
  require('cldr-data/main/fr-CH/numbers.json'),
  require('cldr-data/main/fr-CH/timeZoneNames.json'));

import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as gregorian from 'cldr-data/main/fr-CH/ca-gregorian.json';
import * as numbers from 'cldr-data/main/fr-CH/numbers.json';
import * as timeZoneNames from 'cldr-data/main/fr-CH/timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
  'fr-CH': {
    'schedule': {
      'saveButton': 'Valider',
      'cancelButton': 'Fermer',
      'deleteButton': 'Supprimer',
      'newEvent': 'Ajouter séance',
      'editEvent': 'Cette séance',
      'moreDetails': 'Plus de détails',

      'today':'Aujourd\'hui',
      'day': 'Journée',
      'week': 'Semaine',
      'month': 'Mois',

      'Sunday': 'Dimanche',
      "repeat": "Répéter",
    },
    'recurrenceeditor': {
      'monday': 'lundi',
      "none": "None",
      "daily": "Tous les jours",
      "weekly": "Chaque semaine",
      "monthly": "Chaque mois",
      "month": "Mois",
      "yearly": "Année",
      "never": "Jamais",
      "until": "Jusqu\'à",
      "count": "Count",
      "first": "Premier",
      "second": "Deuxiéme",
      "third": "Troisième",
      "fourth": "Fourth",
      "last": "Last",
      "repeat": "Répéter",
      "repeatEvery": "Répéter chaque",
      "on": "Répéter",
      "end": "Fin",
      "onDay": "Jour",
      "days": "Jour(s)",
      "weeks": "Semaine(s)",
      "months": "Mois",
      "years": "Year(s)",
      "every": "chaque",
      "summaryTimes": "time(s)",
      "summaryOn": "on",
      "summaryUntil": "until",
      "summaryRepeat": "Repeats",
      "summaryDay": "day(s)",
      "summaryWeek": "week(s)",
      "summaryMonth": "month(s)",
      "summaryYear": "year(s)"
    }
  },
});

@Component({
  selector: 'app-schedule-prof',
  templateUrl: './schedule-prof.component.html',
  styleUrls: ['./schedule-prof.component.sass'],
  providers: [DayService, WeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class ScheduleProfComponent implements OnInit {
  seance : Seance = new Seance();
  seanceModifiee : Seance = new Seance();
  newGroupe : Groupes = new Groupes();
  newGroupeFromDb : Groupes = new Groupes();
  public aa : Object[];
  public items: object[];
  data : Seance[];
  out : Object[];
  public outData: Object[];
  public dataManager: DataManager;
  public eventSettings: EventSettingsModel;
  recurrence:string;

  /// data to use in select in the schedule
  public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
  public StatusData: Object[] = [
    { StatusText: 'Francais', Id: 1 },
    { StatusText: 'Anglais', Id: 2 },
    { StatusText: 'Chimie', Id: 3 }
  ];

  public niveauFields: Object = { text: 'StatusText', value: 'StatusText' };
  public NiveauData: Object[] = [
    { StatusText: '1ére année', Id: 1 },
    { StatusText: '2éme année', Id: 2 },
    { StatusText: '3éme année', Id: 3 },
    { StatusText: '4éme année', Id: 4 },
    { StatusText: '5éme année', Id: 5 },
    { StatusText: '6éme année', Id: 6 },
    { StatusText: '7éme année', Id: 7 },
  ];

  constructor(private seanceService: SeanceService,private groupesService : GroupesService) {}

  async ngOnInit() {

    this.data = await this.seanceService.afficherSeanceAsync();
    console.log(this.data);
    this.out = this.data.map(function (obj) {
      if (obj.duree === 0){
        return {
          Id: obj.id,
          Subject: obj.titre,
          StartTime : new Date(obj.date_debut),
          EndTime : new Date(obj.date_fin),
          CategoryColor: obj.couleur,
          Description: obj.description,
          Matiere: obj.matiere,
          Niveau: obj.niveau,
          RecurrenceRule: obj.etat,
          RecurrenceException: '20180130T043000Z',
          isAllDay: false

        };
      }else {
        return {
          Id: obj.id,
          Subject: obj.titre,
          StartTime : new Date(obj.date_debut),
          EndTime : new Date(obj.date_fin),
          CategoryColor: obj.couleur,
          Description: obj.description,
          Matiere: obj.matiere,
          Niveau: obj.niveau,
          RecurrenceID: obj.duree,
          RecurrenceException: '20180130T043000Z',
          isAllDay: false,
        };
      }
    });

    this.outData = this.data;
    console.log(this.out);
    this.dataManager = new DataManager({
      json: JSON.parse(JSON.stringify(this.out)),
      adaptor: new RemoteSaveAdaptor()


    });

    this.eventSettings = {
      dataSource: this.out,
    };


    console.log(this.dataManager);
  }

  public test: Object[] = <Object[]>extend([], this.out, null, true);
  public selectedDate: Date = new Date();

  public currentView: View = 'Month';

  @ViewChild('scheduleObj',{static: true})
  public scheduleObj: ScheduleComponent;

  @ViewChild('recObject', {static: true})
  public recObject: RecurrenceEditor;

  oneventRendered(args: EventRenderedArgs): void {
    let categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  onChange(args: ChangeEventArgs): void {
    this.scheduleObj.eventSettings.editFollowingEvents = args.checked;
    console.log(args);
  }

  onChangeRecurrence(args: RecurrenceEditorChangeEventArgs): void {
    console.log(args);
    this.recurrence = args.value ;
  }

  public dateParser(data: string) {
    return new Date(data);
  }

  /*public onEventRendered(args: EventRenderedArgs): void {
    switch (args.data.EventType) {
      case 'Requested':
        (args.element as HTMLElement).style.backgroundColor = '#F57F17';
        break;
      case 'Confirmed':
        (args.element as HTMLElement).style.backgroundColor = '#7fa900';
        break;
      case 'New':
        (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
        break;
    }
  }*/

  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'QuickInfo') {
      let data: any;
      data = <any>args.data;

      console.log(data);
      if (data.Id === undefined) {
        args.cancel = true;
      } else {
        args.cancel = false;
        if (args.element.querySelector('.e-popup-content')) {
          console.log(args.element.querySelector('.e-popup-content'));
          let row: HTMLElement = createElement('div', {className: 'e-description'});
          console.log(row);
          //let formElement: HTMLElement = args.element.querySelector('.e-description');
          //formElement.firstChild.insertBefore(row, args.element.querySelector('.e-description'));
          let container: HTMLElement = createElement('div', {className: 'e-resource-icon e-icons'});
          let inputEle: HTMLElement = createElement('div', {className: 'e-description-details e-text-ellipsis'});
          let a:HTMLElement = createElement('a', {attrs: {href : '/#/prof/seance/details/'+data.Id},innerHTML: 'Voir plus'});
          inputEle.append(a);
          row.appendChild(container);
          row.appendChild(inputEle);
          args.element.querySelector('.e-popup-content').append(row);
        }
      }
    }
  }

  public onActionBegin(args: { [key: string]: Object }): void {
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      let data: any;
      if (args.requestType === 'eventCreate') {
        // add course and group
        data = <any>args.data[0];
        data.isAllDay = false;
        this.seance.titre = data.Subject;
        this.seance.date_debut = data.StartTime;
        this.seance.date_fin = data.EndTime;
        this.seance.description = data.Description;
        this.seance.couleur = data.CategoryColor;
        this.seance.matiere = data.Matiere;
        this.seance.niveau = data.Niveau;
        this.seance.etat = this.recurrence;
        data.RecurrenceRule = this.recurrence;

        console.log(data);
        this.newGroupe.nom = this.seance.titre;
        this.groupesService.ajouterGroupe(this.newGroupe).subscribe(data=>{
          this.newGroupeFromDb = data as Groupes;
          console.log(data);
          console.log(this.newGroupeFromDb);
          this.seance.groupes = this.newGroupeFromDb;
          this.seanceService.ajouterSeance(this.seance).subscribe(data=>{console.log(data);
            $.notify("Séance ajoutée avec succès", "success");
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
          });

        });
      } else if (args.requestType === 'eventChange') {
        data = <any>args.data;
        data.RecurrenceRule = this.recurrence;
         console.log(data);

         if (data.occurrence === undefined) {
           // update course
           this.seanceModifiee.id = data.Id;
           this.seanceModifiee.titre = data.Subject;
           this.seanceModifiee.description = data.Description;
           this.seanceModifiee.date_debut = data.StartTime;
           this.seanceModifiee.date_fin = data.EndTime;
           this.seanceModifiee.couleur = data.CategoryColor;
           this.seanceModifiee.matiere = data.Matiere;
           this.seanceModifiee.niveau = data.Niveau;
           this.seanceModifiee.etat = data.RecurrenceRule;

           this.seanceService.modifierSeanceAsync(this.seanceModifiee, data.Id).then( $.notify("Séance modifiée avec succès", "success"));
         } else {
           this.seanceModifiee.titre = data.occurrence.Subject;
           this.seanceModifiee.description = data.occurrence.Description;
           this.seanceModifiee.date_debut = data.occurrence.StartTime;
           this.seanceModifiee.date_fin = data.occurrence.EndTime;
           this.seanceModifiee.couleur = data.occurrence.CategoryColor;
           this.seanceModifiee.matiere = data.occurrence.Matiere;
           this.seanceModifiee.niveau = data.occurrence.Niveau;
           this.seanceModifiee.duree = data.occurrence.RecurrenceID;

           this.seanceService.ajouterSeance(this.seanceModifiee).subscribe(data=>{console.log(data);
             $.notify("Séance ajoutée avec succès", "success");
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
           });

         }
      }
      if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
        args.cancel = true;
      }
    }
  }

  onTreeDragStop(event: DragEventArgs): void {
    event.cancel = true; // cancels the drop action
    this.scheduleObj.openEditor(event.data, 'Save'); // open the event window with updated start and end time
  }

  onAppointmentWindowOpen(args: any): void  {
    args.cancel = true;
    console.log(args);
    // to add custom element in default appointment window
   /* if (this._appointmentAddWindow.find(".custom-fields").length == 0) {
      var customDesign = "<tr class='custom-fields'><td class='e-textlabel'>Event Type</td><td><input class='app-type' type='text'/></td><td class='e-textlabel'>Event Status </td><td><input class='status' type='text'/></td></tr>";
      $(customDesign).insertAfter(this._appointmentAddWindow.find("." + this._id + "appointmentArrow"));
    }

    if (!ej.isNullOrUndefined(args.appointment)) {
      // if double clicked on the appointments, retrieve the custom field values from the appointment object and fills it in the appropriate fields.
      this._appointmentAddWindow.find(".app-type").val(args.appointment.AppointmentType);
      this._appointmentAddWindow.find(".status").val(args.appointment.Status);
    } else {
      // if double clicked on the cells, clears the field values.
      this._appointmentAddWindow.find(".app-type").val("");
      this._appointmentAddWindow.find(".status").val("");
    }*/
  }


}

