import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { APP_DEFAULT_LANG, APP_USER_LANG } from '../../api/config/app-config';
import { translateFactory } from './factoryUtils';

describe('cretate translateFactory', () => {
  const spyTranspaleService: jasmine.SpyObj<TranslateService> =
    jasmine.createSpyObj('TranslateService', ['use', 'setDefaultLang']);

    spyTranspaleService.use.and.returnValue(of());

  it('should set default language', () => {
    translateFactory(spyTranspaleService).call(spyTranspaleService).subscribe();
    expect(spyTranspaleService.setDefaultLang).toHaveBeenCalledWith(
      APP_USER_LANG
    );
  });
  it(`should use language ${APP_USER_LANG}`, () => {
    translateFactory(spyTranspaleService).call(spyTranspaleService).subscribe();
    expect(spyTranspaleService.use).toHaveBeenCalledWith(APP_DEFAULT_LANG);
  });
});
