import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangTranslateService {

  constructor() { }

  selectedLanguage=new BehaviorSubject('en');
}
