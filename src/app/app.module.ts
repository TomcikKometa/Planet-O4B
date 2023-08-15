import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { UiModule } from './modules/ui/ui.module';
import { translateFactory } from './modules/utils/factory/factoryUtils';

export const APPLICATION_INFORMATION_START: InjectionToken<string> = new InjectionToken('application title');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    UiModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true,
    },
    {
      provide: APPLICATION_INFORMATION_START,
      useValue: 'Aktualna wersja systemu 1.8.62'
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
