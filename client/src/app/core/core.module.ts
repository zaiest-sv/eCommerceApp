import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from "./nav-bar/nav-bar.component";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatBadgeModule } from "@angular/material/badge";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
    ]
})
export class CoreModule { }
