import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommunicationService {
  // event emitter that will be subscribed by receiver 
  // to receive the data
  notify: EventEmitter<number>;
  constructor(){
    this.notify = new EventEmitter<number>();
  }

  // method that will be invoked by sender to send that data
  onNotify(id: number): void {
    this.notify.emit(id);
  }
}