import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../models/event';

@Component({
  selector: 'app-event-thumb',
  templateUrl: './event-thumb.component.html',
  styleUrls: ['./event-thumb.component.css']
})
export class EventThumbComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
