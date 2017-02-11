import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <event-thumbnail 
      *ngFor="let event of events"
      (click)="handleThumbnailClick(event)"
      [event]="event"></event-thumbnail>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) {

  }
  
  handleThumbnailClick(event){
     this.toastr.success(event.name);
  }

  ngOnInit(){
    this.events = this.eventService.getEvent();
  }
};