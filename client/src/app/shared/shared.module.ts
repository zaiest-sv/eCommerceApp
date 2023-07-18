import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { PaginationComponent } from './pagination/pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    PagingHeaderComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
