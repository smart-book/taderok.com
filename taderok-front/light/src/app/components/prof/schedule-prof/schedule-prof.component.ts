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
  public aa : Object[];
  public items: object[];
  data : Seance[];
  out : Object[];
  public outData: Object[];
  public dataManager: DataManager;
  public eventSettings: EventSettingsModel;

  constructor(private seanceService: SeanceService) {}

  async ngOnInit() {

    this.data = await this.seanceService.afficherSeanceAsync();
    console.log(this.data);
    this.out = this.data.map(function (obj) {
      return {
        Id: obj.id,
        Subject: obj.titre,
        StartTime : new Date(obj.date_debut),
        EndTime : new Date(obj.date_fin),
        CategoryColor: '#1aaa55'
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
        data = <any>args.data[0];
      } else if (args.requestType === 'eventChange') {
        data = <any>args.data;
      }
      if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
        args.cancel = true;
      }
    }
  }

}

