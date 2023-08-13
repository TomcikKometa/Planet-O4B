import { Component, OnInit, inject } from '@angular/core';
import { APPLICATION_INFORMATION_START } from 'src/app/app.module';

@Component({
  selector: 'planet-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  private readonly appTitle: string = inject(APPLICATION_INFORMATION_START);
  
  public get title(): string {
    return this.appTitle;
  }
}
