import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigurationService } from '../configuration.service';
import { DefaultData } from '../DefaultData';
import { DefaultQRConfiguration } from '../DefaultQRConfiguration';
import { DataService } from '../qr-generator/data.service';
import { QRConfiguration } from '../QRConfiguration';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  config: QRConfiguration;
  data: string;

  constructor(private configurationService: ConfigurationService, private dataService: DataService) {
    this.config = DefaultQRConfiguration;
    this.data = DefaultData;
  }

  ngOnInit(): void {
    this.configurationService.configurationSubject.subscribe(config => {
      this.config = config;
      console.log(this.config);
    });

    this.dataService.dataSubject.subscribe(data => {
      this.data = data;
    })
  }

  downloadQR(): void {
    let qr = document.querySelectorAll(".qr")[0].children[0].children[0] as HTMLElement;
    console.log(qr.getAttribute("src"))
    let link: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
    link.href = qr.getAttribute("src")!;
    link.download = "qr-code.png";
    link.click();
  }
}
