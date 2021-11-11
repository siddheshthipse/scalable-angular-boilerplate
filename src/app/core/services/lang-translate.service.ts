import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangTranslateService {

  constructor() {
    console.log('Scott Lang got triggered');
  }

  selectedLanguage=new BehaviorSubject('en');
}
