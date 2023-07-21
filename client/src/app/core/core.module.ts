import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from "./nav-bar/nav-bar.component";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatBadgeModule } from "@angular/material/badge";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }),
  ],
  exports: [
    NavBarComponent
    ]
})
export class CoreModule { }
