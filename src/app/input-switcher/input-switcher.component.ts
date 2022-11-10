import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../switcher.service';

@Component({
  selector: 'app-input-switcher',
  templateUrl: './input-switcher.component.html',
  styleUrls: ['./input-switcher.component.css']
})
export class InputSwitcherComponent implements OnInit {
  selectedButton: string;

  constructor(private switcherService: SwitcherService) {
    this.selectedButton = "plain-text";
  }

  ngOnInit(): void {
  }

  clicked(selectedButton: "plain-text"|"upi"|"contact"): void {
    this.selectedButton = selectedButton;
    this.switcherService.selectedInputTypeSubject.next(this.selectedButton);
  }
}
