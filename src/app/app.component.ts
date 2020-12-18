import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translateSevice: TranslateService){
    translateSevice.setDefaultLang('srb');
  }

  onInit() { 
  }


  useLanguage(language: string) {
    this.translateSevice.use(language);
  }
}
