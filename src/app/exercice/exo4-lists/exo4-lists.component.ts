import { Component, OnInit } from '@angular/core';
import { IFans } from 'src/app/models/ifans';
import { FanUsersService } from 'src/app/shared/services/fan-users.service';

@Component({
  selector: 'app-exo4-lists',
  templateUrl: './exo4-lists.component.html',
  styleUrls: ['./exo4-lists.component.scss']
})
export class Exo4ListsComponent implements OnInit {

  public fansLists : IFans[] = [];

  constructor(private _fanUsers : FanUsersService) { }

  public refreshFans(){
    this.fansLists = this._fanUsers.fansLists
  }

  ngOnInit(): void {
    this.refreshFans()
  }

  public delFans(index : number){
    this._fanUsers.delFans(index);
    this.refreshFans();
  }

}
