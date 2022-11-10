import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from 'src/app/switcher.service';
import { DefaultData } from '../DefaultData';
import { DataService } from '../qr-generator/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  data: string;
  selectedButton: string;

  constructor(private dataService: DataService, private switcherService: SwitcherService) {
    this.data = DefaultData;
    this.selectedButton = "plain-text";
    this.switcherService.selectedInputTypeSubject.subscribe((selectedButton) => {
      this.selectedButton = selectedButton;
      console.log(this.selectedButton);
    })
  }

  ngOnInit(): void {
  }

  sendData(): void {
    console.log(this.data);
    this.dataService.sendData(this.data);
  }
}
