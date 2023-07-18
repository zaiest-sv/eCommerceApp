import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageIndex: number = 0;
  @Input() pageSize: number = 0;
  @Input() totalCount: number = 0;
  @Output() pageChanged: EventEmitter<PageEvent> = new EventEmitter<PageEvent>;


  onPageChanged(event: PageEvent): void {
    this.pageChanged.emit(event)
  }
}
