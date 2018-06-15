import {Component, Input, OnInit} from '@angular/core';
import {EventService} from './event.service';
import { Event } from '../models/event';
import { ActivatedRoute } from '@angular/router';
import {UploadService} from '../upload.service';
import {AppService} from '../app.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})



export class EventComponent implements OnInit {

  public event: Event;
  public rootUrl;


  constructor(private eventService: EventService, private route: ActivatedRoute, private uploadService: UploadService, private appService: AppService) {
    this.rootUrl = appService.rootUrl;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getEvent(id);
  }

  getEvent(id: any) {
    this.eventService.getEvent(id).subscribe(
      data => {
        this.event = data;
      });
  }


  handleFileInput(files: FileList) {
    this.uploadFile(files.item(0));
  }

  uploadFile(file: File) {
    this.uploadService.postFile(file, this.event).subscribe(data => {
      this.event.videos.push(data);
    }, error => {
      console.log(error);
    });
  }

  onHover(e) {
    //e.target.playbackRate = 3;
    e.target.play();
  }

  onLeave(e) {
    e.target.pause();
  }
  onTimeUpdate(e,i) {
    const percentage = 100 * e.target.currentTime / e.target.duration;
   $('#seek'+ i).css('width', percentage + '%');
  }
}
