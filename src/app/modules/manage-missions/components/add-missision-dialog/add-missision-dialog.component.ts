import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'planet-add-missision-dialog',
  templateUrl: './add-missision-dialog.component.html',
  styleUrls: ['./add-missision-dialog.component.scss'],
})
export class AddMissisionDialogComponent {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pl');   
  }

}
