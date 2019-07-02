import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-prof',
  templateUrl: './calendar-prof.component.html',
  styleUrls: ['./calendar-prof.component.sass']
})
export class CalendarProfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calendarPlugins = [dayGridPlugin];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

}
