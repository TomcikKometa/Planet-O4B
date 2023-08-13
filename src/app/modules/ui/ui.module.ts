import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginatorPageNumberComponent } from './components/paginator/paginator-page-number/paginator-page-number.component';
import { UiRoutingModule } from './ui-routing.module';

const exportedComponents: Type<unknown>[] = [FooterComponent, HeaderComponent, PaginatorComponent];
const moduleComponents: Type<unknown>[] = [PaginatorPageNumberComponent];

@NgModule({
  declarations: [...exportedComponents, ...moduleComponents],
  imports: [CommonModule, UiRoutingModule, MatFormFieldModule, MatSelectModule, FormsModule, MatIconModule],
  exports: [...exportedComponents]
})
export class UiModule {}
