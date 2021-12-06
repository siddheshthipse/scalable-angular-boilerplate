import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangTranslateService {

  constructor() {
    console.log('Language Service');
  }

  selectedLanguage=new BehaviorSubject('en');
}
