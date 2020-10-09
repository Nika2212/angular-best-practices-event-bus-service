import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Events } from '../enums/events';
import { filter, map } from 'rxjs/operators';
import { EmitEvent } from '../../shared/models/emit-event.model';

@Injectable()
export class EventBusService {
  private readonly subject$: Subject<EmitEvent> = new Subject<EmitEvent>();

  public on(event: Events, actions: any): Subscription {
    return this.subject$.pipe(filter((e: EmitEvent) => e.name === event), map((e: EmitEvent) => e.payload)).subscribe(actions);
  }

  public emit(event: EmitEvent): void {
    this.subject$.next(event);
  }
}
