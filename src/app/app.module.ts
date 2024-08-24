import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IconoComponent } from './icono/icono.component';
//primeng
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { StepperModule } from 'primeng/stepper';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [AppComponent, HomeComponent, IconoComponent ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    StepperModule,
    TabViewModule,
    DividerModule,
  ],
  exports: [CommonModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
