import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event';
import {EventService} from '../event/event.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public events: Event[];

  constructor(private eventService: EventService, private appService: AppService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      data => {
        this.events = data;
      });
  }

  createEvent() {
    const event = new Event();
    event.name = 'Guns N Roses 2';
    event.date = new Date();
    event.location = 'Tel Aviv';
    event.videos = [];
    this.eventService.createEvent(event).subscribe(data => {
      this.getEvents();
    });
  }
}
