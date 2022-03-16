import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFans } from 'src/app/models/ifans';
import { FanUsersService } from 'src/app/shared/services/fan-users.service';

@Component({
  selector: 'app-exo4-details',
  templateUrl: './exo4-details.component.html',
  styleUrls: ['./exo4-details.component.scss']
})
export class Exo4DetailsComponent implements OnInit {
  
  public message : string = ""
  public moreDetails! : IFans;

  constructor(private _activatedRoute : ActivatedRoute, private _fanDetails : FanUsersService) { }

  ngOnInit(): void {
    this.message = this._activatedRoute.snapshot.params['id'];
    this.moreDetails = this.fansDetails(this._activatedRoute.snapshot.params['id'])
  }
  
  public fansDetails(index : any){
    return this._fanDetails.fansDetails(index)
  }

}
