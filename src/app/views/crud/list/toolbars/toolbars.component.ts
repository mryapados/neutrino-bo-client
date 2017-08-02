import { SearchRequest } from './../../../../models/searchrequest';
import { PageRequest } from './../../../../models/pagerequest';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.css']
})
export class ToolbarsComponent implements OnInit {
  @Input() totalPages: number;
  @Input() pageBtns: number[];
  @Input() pageRequest: PageRequest;
  @Input() fields: String[];
  @Input() searchRequest: SearchRequest;
  @Output() onSubmitRequest: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  setPage(page: number): void {
    if (page >= 0 && page <= this.totalPages - 1) {
      this.pageRequest.page = page;
      this.onSubmitRequest.emit();
    }
  }

  setPageSize(size: number): void {
    this.pageRequest.size = size;
    this.pageRequest.page = 0; //RAZ numero page pour éviter pb affichage
    this.onSubmitRequest.emit();
  }

  setSortField(field: String): void {
    this.pageRequest.sortField = field;
    this.onSubmitRequest.emit();
  }

  setSortType(type: String): void {
    this.pageRequest.sortType = type;
    this.onSubmitRequest.emit();
  }

  setSearchExpression(expression: String): void {
    this.searchRequest.expression = expression;
    this.onSubmitRequest.emit();
  }

}
