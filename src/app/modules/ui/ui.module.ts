import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UiRoutingModule } from './ui-routing.module';

const components: Type<unknown>[] = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, UiRoutingModule],
  exports:[...components]
})
export class UiModule {}
