import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import {EventInput, OptionsInput} from '@fullcalendar/core';

@Component({
  selector: 'app-calendar-prof',
  templateUrl: './calendar-prof.component.html',
  styleUrls: ['./calendar-prof.component.sass']
})
export class CalendarProfComponent implements OnInit {

  options: OptionsInput;
  eventsModel: any;

  @ViewChild('calendar',{static: true})
  calendarComponent: FullCalendarComponent;

  constructor() { }

  ngOnInit() {
    this.options = {
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth'
      },
      plugins: [dayGridPlugin, interactionPlugin]
    };
  }

  calendarPlugins = [dayGridPlugin];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  addEvent() {
    this.calendarEvents.push(
    { title: 'event 4', date: '2019-07-06' }
  );
  }

  modifyTitle(eventIndex, newTitle) {
    this.calendarEvents[eventIndex].title = newTitle;
  }

}
