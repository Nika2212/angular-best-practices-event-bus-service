import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EventBusService } from '../../../core/services/event-bus.service';
import { EmitEvent } from '../../../shared/models/emit-event.model';
import { Events } from '../../../core/enums/events';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit, AfterViewInit {
  constructor(
    private eventBusService: EventBusService
  ) { }

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.eventBusService.emit<string>(new EmitEvent(Events.ON_A_COMPONENT_INIT, 'Some Data'));
  }
}
