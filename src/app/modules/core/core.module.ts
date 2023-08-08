import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';

import { AddressInterceptor } from './interceptors/address/address.interceptor';
import { AuthorizationInterceptor } from './interceptors/auth/authorization.interceptor';

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      timeOut: 5000,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      maxOpened: 1,
      autoDismiss: true,
      enableHtml: true
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'pl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddressInterceptor,
      multi: true
    },
  ]
})
export class CoreModule {}
