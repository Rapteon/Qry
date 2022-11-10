import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-input-switcher',
  templateUrl: './input-switcher.component.html',
  styleUrls: ['./input-switcher.component.css']
})
export class InputSwitcherComponent implements OnInit {
  selectedButton: string;
  selectedInputTypeSubject: BehaviorSubject<string>;

  constructor() {
    this.selectedButton = "plain-text";
    this.selectedInputTypeSubject = new BehaviorSubject(this.selectedButton);
  }

  ngOnInit(): void {
  }

  clicked(selectedButton: "plain-text"|"upi"|"contact"): void {
    this.selectedButton = selectedButton;
    this.selectedInputTypeSubject.next(this.selectedButton);
  }
}
