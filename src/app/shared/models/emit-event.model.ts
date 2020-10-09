import { Events } from '../../core/enums/events';

export class EmitEvent {
  constructor(public name: Events, public payload: any = null) {}
}
