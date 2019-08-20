import {Component, OnInit, ViewChild} from '@angular/core';
import { recurrenceData } from './data';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent, EventSettingsModel, EventRenderedArgs, View, DayService, WeekService, MonthService, ResizeService, DragAndDropService, PopupOpenEventArgs  } from '@syncfusion/ej2-angular-schedule';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import {SeanceService} from "../../../services/prof/seance.service";
import {DropDownList} from "@syncfusion/ej2-dropdowns";
import {DateTimePicker} from "@syncfusion/ej2-calendars";
import {Seance} from "../../../models/seance";
import {DataManager, Query, ReturnOption, WebApiAdaptor} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-schedule-prof',
  templateUrl: './schedule-prof.component.html',
  styleUrls: ['./schedule-prof.component.sass'],
  providers: [DayService, WeekService, MonthService, ResizeService, DragAndDropService]
})
export class ScheduleProfComponent implements OnInit {
  seance : Seance = new Seance();
  public aa : Object[];
  public items: object[];
  data : Seance[];
  out : Object[];

  constructor(private seanceService: SeanceService) {
    /*this.seanceService.afficherSeance().subscribe(data => {
      console.log(data);
      this.aa = data;
      //console.log(this.data);
    }, error => console.log(error));*/
    //this.out = [];
  }

  private dataManger: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  //public data: Object[] = <Object[]>extend([], this.aa, null, true);
  async ngOnInit() {
    /*this.seanceService.afficherSeance().subscribe(data => {
      console.log(data);
      this.data = data;
      this.out = data.map(function (obj) {
        return {
          Id: obj.id,
          Subject: 'test',
          Location: 'Office',
          StartTime : new Date(obj.date_debut),
          EndTime : new Date(obj.date_fin),
          RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;COUNT=10',
          CategoryColor: '#1aaa55'
        };
      });
      console.log(this.out);
      //console.log(this.data);
    }, error => console.log(error));*/
    this.data = await this.seanceService.afficherSeanceAsync();
    console.log(this.data);
    this.out = this.data.map(function (obj) {
      return {
        Id: obj.id,
        Subject: 'test',
        StartTime : new Date(obj.date_debut),
        EndTime : new Date(obj.date_fin),
        CategoryColor: '#1aaa55'
      };
    });
  }

  public test: Object[] = <Object[]>extend([], this.out, null, true);
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = {
    dataSource: this.out,
    /*fields :{
      subject : {name :'subject'},
      startTime : {name : 'dateDebut'},
      endTime : {name : 'dateFin'}
    }*/
  };
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

  onPopupOpen(args: PopupOpenEventArgs): void {

    if (args.type === 'Editor') {
      let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
      this.seance.titre = statusElement.value;
      if (!statusElement.classList.contains('e-dropdownlist')) {
        let dropDownListObject: DropDownList = new DropDownList({
          placeholder: 'Choose status', value: statusElement.value,
          dataSource: ['New', 'Requested', 'Confirmed']
        });
        dropDownListObject.appendTo(statusElement);
        statusElement.setAttribute('name', 'EventType');
      }
      let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
      if (!startElement.classList.contains('e-datetimepicker')) {
        new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
        this.seance.date_debut = new Date(startElement.value) || new Date();
      }
      let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
      if (!endElement.classList.contains('e-datetimepicker')) {
        new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
        this.seance.date_fin = new Date(endElement.value) || new Date()
      }

      this.seanceService.ajouterSeance(this.seance).subscribe(data=>
           console.log(data),
          error1 => console.log(error1))
    }
  }

}

