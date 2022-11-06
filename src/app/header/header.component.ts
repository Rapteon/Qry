import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../qr-generator/configuration.service';
import { DefaultQRConfiguration } from '../qr-generator/DefaultQRConfiguration';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showConfigurator: boolean;
  QRVersions: Array<number>;
  selectedQRVersion: number;
  selectedQRErrorLevel: 'L' | 'M' | 'H';
  selectedWidth: number;

  constructor(private configurationService: ConfigurationService) {
    this.showConfigurator = false;
    this.QRVersions = [
      1, 2, 3, 4, 5,
      6, 7, 8, 9, 10,
      11, 12, 13, 14, 15,
      16, 17, 18, 19, 20,
      21, 22, 23, 24, 25,
      26, 27, 28, 29, 30,
      31, 32, 33, 34, 35,
      36, 37, 38, 39, 40
    ]
    this.selectedQRVersion = DefaultQRConfiguration.version;
    this.selectedQRErrorLevel = DefaultQRConfiguration.errorCorrectionLevel;
    this.selectedWidth = DefaultQRConfiguration.width;
  }

  ngOnInit(): void {
    this.setQRVersion();
    this.setQRErrorLevel();
  }

  toggleShowConfigurator(): void {
    this.showConfigurator = ! this.showConfigurator;
  }

  setQRErrorLevel(): void {
    this.configurationService.setQRErrorLevel(this.selectedQRErrorLevel);
  }

  setQRVersion(): void {
    this.configurationService.setQRVersion(this.selectedQRVersion);
  }

  setQRWidth(): void {
    this.configurationService.setQRWidth(this.selectedWidth);
  }
}
