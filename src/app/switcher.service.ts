import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitcherService {
  public selectedInputTypeSubject: BehaviorSubject<string>;

  constructor() {
    this.selectedInputTypeSubject = new BehaviorSubject('plain-text');
  }
}
