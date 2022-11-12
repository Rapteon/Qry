import { Component, OnInit } from '@angular/core';
import { SwitcherService } from 'src/app/switcher.service';
import { DefaultData } from '../DefaultData';
import { DataService } from '../qr-generator/data.service';
import { HelpText } from '../HelpText';

interface UPIData {
  accountHolderName: string;
  UPIId: string;
}

interface ContactData {
  firstName: string;
  middleName?: string;
  lastName: string;
  nickname?: string;
  email?: string;
  telephone: number;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  data: string;
  selectedButton: string;
  helpText: string;
  UPIData: UPIData;
  contactData: ContactData;

  constructor(
    private dataService: DataService,
    private switcherService: SwitcherService
  ) {
    this.data = DefaultData;
    this.selectedButton = 'plain-text';
    this.helpText = HelpText.plainText;
    this.UPIData = {} as UPIData;
    this.contactData = {} as ContactData;
    this.switcherService.selectedInputTypeSubject.subscribe(
      (selectedButton) => {
        this.selectedButton = selectedButton;
        console.log(this.selectedButton);
        this.setHelpText(selectedButton);
      }
    );
    // Clear existing data.
  }

  ngOnInit(): void {}

  sendData(): void {
    console.log(this.data);
    switch (this.selectedButton) {
      case 'plain-text':
        this.dataService.dataSubject.next(this.data);
        break;
      case 'upi':
        this.dataService.dataSubject.next(this.generateUPIData());
        break;
      case 'contact':
        this.dataService.dataSubject.next(this.generateContactData());
    }
  }

  setHelpText(selectedButton: string): void {
    switch (selectedButton) {
      case 'plain-text':
        this.helpText = HelpText.plainText;
        break;
      case 'upi':
        this.helpText = HelpText.upi;
        break;
      case 'contact':
        this.helpText = HelpText.contact;
        break;
      default:
        this.helpText = '';
    }
  }

  generateUPIData() {
    return encodeURI(
      `upi://pay?pa=${this.UPIData.UPIId}&pn=${this.UPIData.accountHolderName}`
    );
  }

  generateContactData(): string {
    const VCARD_PROPERTIES = {
      begin: 'BEGIN:VCARD',
      version: 'VERSION:3.0',
      end: 'END:VCARD',
    };
    const CRLF: string = '\u000D\u000A';
    const SPACE: string = '\u0020';
    const FN: string = [this.contactData.firstName, this.contactData.middleName, this.contactData.lastName].join(
      SPACE
    );
    const parts = [
      VCARD_PROPERTIES.begin,
      `FN: ${FN}`,
      `TEL: ${this.contactData.telephone}`,
    ];
    // Add nickname if present.
    if (this.contactData.nickname !== undefined) {
      parts.push(`NICKNAME: ${this.contactData.nickname}`);
    }
    
    // Add email if present.
    if (this.contactData.email !== undefined) {
      parts.push(`EMAIL: ${this.contactData.email}`);
    }

    return parts.join(CRLF);
  }
}
