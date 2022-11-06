import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultQRConfiguration } from './DefaultQRConfiguration';
import { QRConfiguration } from './QRConfiguration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  version: number;
  errorCorrectionLevel: 'L' | 'M' | 'H';
  width: number;
  currentConfiguration: QRConfiguration;
  configurationSubject: BehaviorSubject<QRConfiguration>;

  constructor() {
    this.version = 4;
    this.errorCorrectionLevel = "M";
    this.width = 256;
    this.configurationSubject = new BehaviorSubject(DefaultQRConfiguration);
    this.currentConfiguration = DefaultQRConfiguration;
  }

  setQRVersion(version:number): void {
    console.assert(version >= 1 && version <= 40, "QR version must be between 1 and 40");
    this.version = version;
    this.updateConfig();
  }

  setQRErrorLevel(level: 'L' | 'M' | 'H'): void {
    console.assert(level === 'L' || level === 'M' || level === 'H', "Error correction Level must be either L, M or H");
    this.errorCorrectionLevel = level;
    this.updateConfig();
  }

  setWidth(width: number): void {
    console.assert(width >= 256 && width <= 512, "Width must be between 256 and 512");
    this.width = width;
    this.updateConfig();
  }

  updateConfig(): void {
    this.currentConfiguration = {
      width: this.width,
      version: this.version,
      errorCorrectionLevel: this.errorCorrectionLevel
    };
    this.configurationSubject.next(this.currentConfiguration);
  }

  getConfig(): QRConfiguration {
    return this.currentConfiguration;
  }
}
