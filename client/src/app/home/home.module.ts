import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule
    ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
