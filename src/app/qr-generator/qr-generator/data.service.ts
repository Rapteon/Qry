import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultData } from '../DefaultData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string;
  dataSubject: BehaviorSubject<string>;
  constructor() {
    this.data = DefaultData;
    this.dataSubject = new BehaviorSubject(this.data);
  }

  sendData(data: string): void {
    this.dataSubject.next(data);
  }
}
