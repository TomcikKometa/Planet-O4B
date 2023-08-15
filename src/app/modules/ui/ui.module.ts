import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagePopUpComponent } from './components/language-pop-up/language-pop-up.component';
import { LogoutPopUpComponent } from './components/logout-pop-up/logout-pop-up.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginatorPageNumberComponent } from './components/paginator/paginator-page-number/paginator-page-number.component';
import { UiRoutingModule } from './ui-routing.module';


const exportedComponents: Type<unknown>[] = [FooterComponent, HeaderComponent, PaginatorComponent];
const moduleComponents: Type<unknown>[] = [PaginatorPageNumberComponent, LogoutPopUpComponent, LanguagePopUpComponent];

@NgModule({
  declarations: [...exportedComponents, ...moduleComponents],
  imports: [
    CommonModule,
    UiRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
  ],
  exports: [...exportedComponents]
})
export class UiModule {}
