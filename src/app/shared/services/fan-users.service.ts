import { Injectable } from '@angular/core';
import { IFans } from 'src/app/models/ifans';

@Injectable({
  providedIn: 'root'
})
export class FanUsersService {

  public fansLists : IFans[] = [
    {
      lastname : 'Nico',
      firstname : 'Dabo',
      birthdate : new Date('1996-06-04'),
      series : [
        {
          name : 'Draaaaa'
        }
      ]
    },
    {
      lastname : 'Remi',
      firstname : 'Simon',
      birthdate : new Date('1996-06-04'),
      series : [
        {
          name : 'OOOOOOO'
        }
      ]
    }
  ]

  constructor() { }

  public addFans(fans : IFans){
    if(this.fansLists.filter(f => f.lastname == fans.lastname)){
      this.fansLists.unshift(fans)
    }
  }

  public delFans(index : number){
    this.fansLists.splice(index, 1)
  }

  public fansDetails(index : number){
    return this.fansLists[index]
  }

}
