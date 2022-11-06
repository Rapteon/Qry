import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  qrVersionSubject: BehaviorSubject<number>;
  qrErrorLevelSubject: BehaviorSubject<string>;

  constructor() {
    this.qrVersionSubject = new BehaviorSubject(1);
    this.qrErrorLevelSubject = new BehaviorSubject("M");
  }

  setQRVersion(version:number) {
    console.assert(version >= 1 && version <= 40, "QR version must be between 1 and 40");
    this.qrVersionSubject.next(version);
    console.debug(version);
  }

  setQRErrorLevel(level: 'L' | 'M' | 'H') {
    console.assert(level === 'L' || level === 'M' || level === 'H', "Error correction Level must be either L, M or H");
    this.qrErrorLevelSubject.next(level);
    console.debug(level);
  }
}
