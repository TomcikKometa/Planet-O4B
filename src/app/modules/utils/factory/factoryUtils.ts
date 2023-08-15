import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { APP_DEFAULT_LANG, APP_USER_LANG } from '../../api/config/app-config';

export function translateFactory(translateService: TranslateService): () => Observable<void> {
    return () => {
      translateService.setDefaultLang(APP_USER_LANG);
      return translateService.use(APP_DEFAULT_LANG);
    };
}