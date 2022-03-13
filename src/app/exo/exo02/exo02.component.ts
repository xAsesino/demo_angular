import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss']
})
export class Exo02Component implements OnInit {

  myNumber : number = 489664558
  choice : string = "+32";

  prefixes : any[] = [
    {
      "country" : "Belgium",
      "prefixe": "+32"
    },
    {
      "country" : "France",
      "prefixe": "+33"
    },
    {
      "country" : "Italy",
      "prefixe": "+39"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
