import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShopComponent } from './shop.component';
import {ShopService} from "./shop.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    NgOptimizedImage
  ],
  exports: [ShopComponent],
  providers: [ShopService]
})
export class ShopModule { }
