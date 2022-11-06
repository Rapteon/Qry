import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { GeneratorComponent } from './generator/generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    DisplayComponent,
    GeneratorComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    FormsModule
  ],
  exports: [
    GeneratorComponent
  ]
})
export class QrGeneratorModule { }
