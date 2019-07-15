import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import {EventInput, OptionsInput} from '@fullcalendar/core';
declare const $: any;
declare const jQuery: any;
@Component({
  selector: 'app-calendar-prof',
  templateUrl: './calendar-prof.component.html',
  styleUrls: ['./calendar-prof.component.sass']
})
export class CalendarProfComponent implements OnInit , AfterViewInit {

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
        //right: 'dayGridMonth timeGridWeek timeGrid '
        right: 'dayGridMonth timeGridWeek timeGridDay listWeek'
      },
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      droppable: true,
      navLinks: true
    };


   /* var AppCalendar = function () {
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

     */         /***** events ********/
     /*       events: [{
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
    });*/
  }

  @ViewChildren('customevents') customevents: QueryList<any>;
  ngAfterViewInit() {
    setTimeout(()=>{
      this.customevents.forEach(function (item) {
        console.log("in foreach");
        // store data so the calendar knows to render an event upon drop
        $(item.nativeElement).data('events', {
          title: $.trim($(item.nativeElement).text()), // use the element's text as the event title
          stick: true // maintain when user navigates (see docs on the renderEvent method)
        }, console.log(item));
        // make the event draggable using jQuery UI
        $(item.nativeElement).draggable({
          zIndex: 999,
          revert: true,      // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        });

      });
    }, 100);
  }

  calendarPlugins = [dayGridPlugin];

  dateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  addEvent() {
    this.calendarEvents= this.calendarEvents.concat(
    { title: 'event 4', start: new Date() }
     );
  }

  modifyTitle(eventIndex, newTitle) {
    this.calendarEvents[eventIndex].title = newTitle;
  }

  //////////////////////////

  eventClick(model) {
    console.log(model);
    this.modifyTitle(0, "test")
    alert('event click'+ model.toString())
  }
  eventDragStop(model) {
    console.log(model);
  }
  eventReceive(model){
    console.log(model)
  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
  updateEvents() {
    this.calendarEvents = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-01',
      end: this.yearMonth + '-01'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}
