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
  canShare = navigator.canShare != null

  url: SafeUrl = '';

  updateUrl = (url: SafeUrl) => {
    this.url = url;
  };

  downloadImage = async () => {
    const link = document.getElementById('download-link');
    link?.click();
  };

  shareImage = async () => {
    const link = document.getElementById('download-link');
    const response = await fetch(link?.getAttribute('href')!);
    const blob = await response.blob();
    const file = new File([blob], 'qr-code.png', { type: 'image/png' });

    await navigator.share({
      files: [file],
      title: 'QR Code',
      text: 'Here is your QR code',
    });
  };
}
