import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'planet-side-nav-button',
  templateUrl: './side-nav-button.component.html',
  styleUrls: ['./side-nav-button.component.scss']
})
export class SideNavButtonComponent {
  @Input() public label: string = '';
  @Input() public image: string = '';
  @Input() public active: boolean = false;

  @Input() public index: number = 0;
  @Output() public readonly emitIndex: EventEmitter<number> = new EventEmitter<number>();
}
