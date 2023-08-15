import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'planet-language-pop-up',
  templateUrl: './language-pop-up.component.html',
  styleUrls: ['./language-pop-up.component.scss']
})
export class LanguagePopUpComponent implements OnInit {
  public setLanguage: string = 'pl';
  public languages: any = [
    { language: 'Polski (PL)', value: 'pl', checked: true },
    { language: 'English (EN)', value: 'en', checked: false },
    { language: 'Deutsch (DE)', value: 'de', checked: false },
    { language: 'Yкраїнська (UA)', value: 'ua', checked: false }
  ];

  private readonly translateService: TranslateService = inject(TranslateService);
  private readonly dialogRef: MatDialogRef<LanguagePopUpComponent> = inject(MatDialogRef);

  public ngOnInit(): void {
    if (sessionStorage.getItem('lang')) {
      const setLanguage = sessionStorage.getItem('lang')!;
      this.translateService.use(setLanguage);
      this.languages.forEach((t: any) =>
        t.value === sessionStorage.getItem('lang') ? (t.checked = true) : (t.checked = false)
      );
    }
  }

  public changeLanguage(lang: string): void {
    sessionStorage.setItem('lang', lang);
    this.translateService.use(lang);
      this.dialogRef.close(lang);
  }
}
