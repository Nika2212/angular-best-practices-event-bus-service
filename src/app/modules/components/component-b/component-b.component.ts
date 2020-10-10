import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../../core/services/event-bus.service';
import { Events } from '../../../core/enums/events';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  constructor(
    private eventBusService: EventBusService
  ) { }

  public ngOnInit(): void {
    this.eventBusService.on(Events.ON_A_COMPONENT_INIT, (payload) => {
      console.log(payload);
    });
  }
}
