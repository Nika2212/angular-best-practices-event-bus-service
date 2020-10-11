import { Events } from '../../core/enums/events';

export class EmitEvent<T = any> {
  constructor(public name: Events, public payload?: T) {}
}
