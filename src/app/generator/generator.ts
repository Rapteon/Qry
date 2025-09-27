import { Component, signal } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-generator',
  imports: [QRCodeComponent, FormsModule],
  templateUrl: './generator.html',
  styleUrl: './generator.css'
})
export class Generator {
  data = 'Type to generate'
}
