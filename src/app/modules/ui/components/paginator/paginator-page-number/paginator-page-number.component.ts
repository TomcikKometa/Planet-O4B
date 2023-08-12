import { Component, Input } from '@angular/core';

@Component({
  selector: 'planet-paginator-page-number',
  templateUrl: './paginator-page-number.component.html',
  styleUrls: ['./paginator-page-number.component.scss']
})
export class PaginatorPageNumberComponent {
  @Input() public pageNumber: number = 1;
  @Input() public isActive: boolean = false;
}
