import { Component, Injectable } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-generator',
  imports: [QRCodeComponent, FormsModule],
  templateUrl: './generator.html',
  styleUrl: './generator.css',
})
export class Generator {
  constructor() {}
  data = 'Type to generate';

  url: SafeUrl = '';

  updateUrl = (url: SafeUrl) => {
    this.url = url;
  };

  downloadImage = async () => {
    const link = document.getElementById('download-link');
    link?.click();
  };
}
