import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ability, AbilityBuilder } from '@casl/ability';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(private http:HttpClient,private ability: Ability) { }

  
  setUserAbility(useremail:any){
    const { can, cannot, rules } = new AbilityBuilder(Ability);

    if(useremail=='siddheshthipse@gmail.com'){
      can('manage','all');
    }else{
      console.log('Not an Admin');
      return;
    }

    console.log(rules);
    this.ability.update(rules);
  }
}
