import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkList: Link[];

  constructor(private translateSevice: TranslateService) {
    translateSevice.setDefaultLang('srb');
    this.linkList = [
      { title: 'Home', linkTo: 'home' },
      { title: "Contacts", linkTo: 'contacts' }
    ]
  }

  ngOnInit(): void {
  }

  useLanguage(language: string) {
    this.translateSevice.use(language);
  }
}
