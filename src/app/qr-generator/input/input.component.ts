import { Component, OnInit } from '@angular/core';
import { DefaultData } from '../DefaultData';
import { DataService } from '../qr-generator/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  data: string;

  constructor(private dataService: DataService) {
    this.data = DefaultData;
  }

  ngOnInit(): void {
  }

  sendData(): void {
    console.log(this.data);
    this.dataService.sendData(this.data);
  }
}
