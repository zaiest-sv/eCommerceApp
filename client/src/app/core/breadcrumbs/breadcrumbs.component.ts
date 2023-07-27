import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  constructor(public bcService: BreadcrumbService) {}
}
