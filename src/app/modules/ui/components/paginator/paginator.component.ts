import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface PaginationOptions {
  currentPage: number;
  numberOfItems: number;
}

interface PaginatorSelectOptions {
  label: string;
  value: number;
}

@Component({
  selector: 'planet-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  public selectedNumberOfItems: number = 10;
  public pages: number[] = [];
  @Input() public numberOfPages: number = 0;
  @Input() public currentPage: number = 0;
  @Output() public readonly paginationChange: EventEmitter<PaginationOptions> = new EventEmitter<PaginationOptions>();

  public readonly paginatorSelectOptions: PaginatorSelectOptions[] = [
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 }
  ];

  public ngOnInit(): void {
    this.pages = Array(this.numberOfPages)
      .fill(0)
      .map((x: unknown, i: number) => i);
  }

  public handlePaginationChange(): void {
    this.paginationChange.next({ currentPage: this.currentPage, numberOfItems: this.selectedNumberOfItems });
  }
}
