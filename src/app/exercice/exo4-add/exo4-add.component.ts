import { Component, OnInit } from '@angular/core';
import { FanUsersService } from 'src/app/shared/services/fan-users.service';

@Component({
  selector: 'app-exo4-add',
  templateUrl: './exo4-add.component.html',
  styleUrls: ['./exo4-add.component.scss']
})
export class Exo4AddComponent implements OnInit {

  public fanLastName: string = "";
  public fanFirstName: string = "";
  public fanSeries: string = "";
  public fanBirth: Date = new Date()

  constructor(private _fanListService: FanUsersService) { }

  ngOnInit(): void {
  }

  public addFans() {
    this._fanListService.addFans({
      lastname: this.fanLastName,
      firstname: this.fanFirstName,
      birthdate: new Date(),
      series: [
        {
          name: this.fanSeries
        }
      ]
    })

    this.fanLastName = ""
    this.fanFirstName = ""
    this.fanSeries = ""
    this.fanBirth = new Date()
  
    console.log(this._fanListService)
  }

}
