import {Component, OnInit, ViewChild} from '@angular/core';
import { recurrenceData } from './data';
import {extend, L10n} from '@syncfusion/ej2-base';
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
  RecurrenceEditor
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

L10n.load({
  'en-US': {
    'schedule': {
      'saveButton': 'Valider',
      'cancelButton': 'Fermer',
      'deleteButton': 'Supprimer',
      'newEvent': 'Ajouter séance',
    },
  }
});

@Component({
  selector: 'app-schedule-prof',
  templateUrl: './schedule-prof.component.html',
  styleUrls: ['./schedule-prof.component.sass'],
  providers: [DayService, WeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class ScheduleProfComponent implements OnInit {
  seance : Seance = new Seance();
  newGroupe : Groupes = new Groupes();
  newGroupeFromDb : Groupes = new Groupes();
  public aa : Object[];
  public items: object[];
  data : Seance[];
  out : Object[];
  public outData: Object[];
  public dataManager: DataManager;
  public eventSettings: EventSettingsModel;

  constructor(private seanceService: SeanceService,private groupesService : GroupesService) {}

  async ngOnInit() {

    this.data = await this.seanceService.afficherSeanceAsync();
    console.log(this.data);
    this.out = this.data.map(function (obj) {
      return {
        Id: obj.id,
        Subject: obj.titre,
        StartTime : new Date(obj.date_debut),
        EndTime : new Date(obj.date_fin),
        CategoryColor: obj.couleur,
        Description: obj.description,
        //RecurrenceRule: 'FREQ=DAILY;INTERVAL=3;'
      };
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
    //this.recObject.setRecurrenceRule(args as string);
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
  public onActionBegin(args: { [key: string]: Object }): void {
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      let data: any;
      if (args.requestType === 'eventCreate') {
        // add course and group
        data = <any>args.data[0];
        this.seance.titre = data.Subject;
        this.seance.date_debut = data.StartTime;
        this.seance.date_fin = data.EndTime;
        this.seance.description = data.Description;
        this.seance.couleur = data.CategoryColor;
        console.log(data);
        this.newGroupe.nom = this.seance.titre;
        this.groupesService.ajouterGroupe(this.newGroupe).subscribe(data=>{
          this.newGroupeFromDb = data as Groupes;
          console.log(data);
          console.log(this.newGroupeFromDb);
          this.seance.groupes = this.newGroupeFromDb;
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
          });

        });
      } else if (args.requestType === 'eventChange') {
        data = <any>args.data;
      }
      if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
        args.cancel = true;
      }
    }
  }

  public paletteOnChange(args: ColorPickerEventArgs): void {
    (this.splitBtn.element.querySelector(".e-font-icon") as HTMLElement).style.borderBottomColor = args.currentValue.rgba;
  }

}

