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
import { ProductItemComponent } from './product-item/product-item.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../shared/shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterLink} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {ShopRoutingModule} from "./shop-routing.module";


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
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
    NgOptimizedImage,
    MatSlideToggleModule,
    FormsModule,
    MatPaginatorModule,
    SharedModule,
    ReactiveFormsModule,
    RouterLink,
    MatTableModule,
    ShopRoutingModule
  ],
  providers: [ShopService]
})
export class ShopModule { }
