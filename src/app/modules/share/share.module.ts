import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideNavButtonComponent } from './side-nav-button/side-nav-button.component';



@NgModule({
  declarations: [SideNavButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[SideNavButtonComponent]
})
export class ShareModule { }
