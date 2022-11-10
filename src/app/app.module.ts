import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QrGeneratorModule } from './qr-generator/qr-generator.module';
import { InputSwitcherComponent } from './input-switcher/input-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QrGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
