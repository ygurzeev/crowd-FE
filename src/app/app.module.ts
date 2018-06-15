import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import {EventService} from './event/event.service';
import {AppService} from './app.service';
import { UploadService } from './upload.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventThumbComponent } from './event-thumb/event-thumb.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    DashboardComponent,
    EventThumbComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [EventService, AppService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
